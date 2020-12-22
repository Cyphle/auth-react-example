import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { UsersListEntryPropsType } from './users-list-entry';
import { UsersListEntry } from './users-list-entry.component';

describe('UsersListEntry Component', () => {
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
    ReactDOM.render(<UsersListEntry { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<UsersListEntry { ...props }/>);

    expect(wrapper.props().account.firstName).toEqual('John');
    expect(wrapper.props().account.lastName).toEqual('Doe');
    expect(wrapper.props().account.email).toEqual('john.doe@dodo.fr');
  });

  it('should render user', () => {
    const wrapper = mount(<UsersListEntry { ...props }/>);
    const exps = wrapper.find('.username');

    expect(exps.get(0)).toEqual(<div className="username">john.doe@dodo.fr</div>);
  });
});
