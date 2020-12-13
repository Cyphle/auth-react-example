import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, UsersListPropsType } from './users-list';
import { UsersList } from './users-list.component';
import { UsersListEntry } from '../users-list-entry/users-list-entry.component';
import { connect, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import lifecycle from 'react-pure-lifecycle';
import { fetchUsersAction } from '../../store/user.actions';

describe('Gallery Component', () => {
  const users: User[] = [
    {
      username: 'JohnDoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@dodo.fr'
    }
  ];
  const fetchUsersSpy = jest.fn();
  const props: UsersListPropsType = {
    users,
    fetchUsers: fetchUsersSpy,
  };
  const store = configureStore()({
    userState: {
      users
    }
  });
  const MockConnectedUsersList = connect(
      mapStoreStateToProps,
      ({
        ...mapStoreDispatchToProps,
        fetchUsers: (): Action => {
          fetchUsersSpy();
          return fetchUsersAction();
        }
      })
  )(lifecycle(methods)(UsersList));

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UsersList { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<UsersList { ...props }/>);

    expect(wrapper.props().users).toEqual(users);
  });

  it('should render medias', () => {
    const wrapper = mount(<UsersList { ...props }/>);
    const exps = wrapper.find(UsersListEntry);

    expect(exps).toHaveLength(1);
  });

  it('should launch action when component did mount', () => {
    const wrapper = mount(<Provider store={ store }><MockConnectedUsersList { ...props }/></Provider>);

    expect((wrapper.find(MockConnectedUsersList).props() as UsersListPropsType).users).toEqual(users);
    expect(fetchUsersSpy).toHaveBeenCalled();
  });
});
