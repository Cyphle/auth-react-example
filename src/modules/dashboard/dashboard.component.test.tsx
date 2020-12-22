import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { connect } from 'react-redux';
import configureStore from 'redux-mock-store';
import lifecycle from 'react-pure-lifecycle';
import { DashboardPropsType, mapStoreDispatchToProps, mapStoreStateToProps, methods } from './dashboard';
import { DashBoard } from './dashboard.component';

describe('DashboardComponent', () => {
  const userInfo: UserInfo = {
      username: 'JohnDoe',
      firstName: 'John',
      lastName: 'Doe',
      authorities: []
    };
  const props: DashboardPropsType = {
    userInfo
  };
  const store = configureStore()({
    globalState: {
      userInfo
    }
  });
  const MockConnectedDashboard = connect(
      mapStoreStateToProps,
      ({
        ...mapStoreDispatchToProps,
      })
  )(lifecycle(methods)(DashBoard));

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashBoard { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<DashBoard { ...props }/>);

    expect(wrapper.props().userInfo).toEqual(userInfo);
  });
});
