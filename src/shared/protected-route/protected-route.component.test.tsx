import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import lifecycle from 'react-pure-lifecycle';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, ProtectedRoutePropsType } from './protected-route';
import { fetchUsersAction } from '../../modules/user/store/user.actions';
import { ProtectedRoute } from './protected-route.component';
import { BrowserRouter as Router } from 'react-router-dom';

const MockComponent = (props: any) => (
    <div>
      Hello World Component
    </div>
);

describe('ProtectedRouteComponent', () => {
  const userInfo: UserInfo = {
    username: 'john.doe@dodo.fr',
    firstName: 'John',
    lastName: 'Doe',
    authorities: []
  };
  const fetchUserInfoSpy = jest.fn();
  const props: ProtectedRoutePropsType = {
    // @ts-ignore
    component: MockComponent,
    userInfo,
    isAuth: 'AUTH',
    fetchUserInfo: fetchUserInfoSpy
  };
  const store = configureStore()({
    globalState: {
      userInfo,
      authStatus: 'AUTH'
    }
  });
  const MockConnectedProtectedRoute = connect(
      mapStoreStateToProps,
      ({
        ...mapStoreDispatchToProps,
        fetchUserInfo: (): Action => {
          fetchUserInfoSpy();
          return fetchUsersAction();
        }
      })
  )(lifecycle(methods)(ProtectedRoute));

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><ProtectedRoute { ...props } /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Router><ProtectedRoute { ...props } /></Router>);

    expect(wrapper.find(ProtectedRoute).props().userInfo).toEqual(userInfo);
  });

  it('should launch action when component did mount', () => {
    const wrapper = mount(<Provider store={ store }><Router><MockConnectedProtectedRoute { ...props }/></Router></Provider>);

    expect((wrapper.find(MockConnectedProtectedRoute).props() as ProtectedRoutePropsType).userInfo).toEqual(userInfo);
    expect(fetchUserInfoSpy).toHaveBeenCalled();
  });
});
