import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { UsersListEntryPropsType } from './clients-list-entry';
import { UsersListEntry } from './clients-list-entry.component';

describe('UsersListEntry Component', () => {
  const user: User = {
    username: 'JohnDoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@dodo.fr'
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

    expect(wrapper.props().username).toEqual('JohnDoe');
    expect(wrapper.props().firstName).toEqual('John');
    expect(wrapper.props().lastName).toEqual('Doe');
    expect(wrapper.props().email).toEqual('john.doe@dodo.fr');
  });

  it('should render user', () => {
    const wrapper = mount(<UsersListEntry { ...props }/>);
    const exps = wrapper.find('.username');

    expect(exps.get(0)).toEqual(<div className="username">JohnDoe</div>);
  });
});
