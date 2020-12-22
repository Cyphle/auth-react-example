import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { UserListItem } from './user-list-item.component';
import { UsersListEntryPropsType } from './users-list-entry';

describe('UserListItem', () => {
  const user: User = {
    account: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@dodo.fr'
    },
    authorities: []
  };
  const props: UsersListEntryPropsType = {
    ...user
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserListItem { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<UserListItem { ...props }/>);

    expect(wrapper.props().account.firstName).toEqual('John');
    expect(wrapper.props().account.lastName).toEqual('Doe');
    expect(wrapper.props().account.email).toEqual('john.doe@dodo.fr');
  });

  it('should render user', () => {
    const wrapper = mount(<UserListItem { ...props }/>);
    const exps = wrapper.find('.username');

    expect(exps.get(0).props.children.props.primary).toEqual('john.doe@dodo.fr - John Doe');
  });
});
