import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { ClientsListEntryPropsType } from './clients-list-entry';
import { ClientsListEntry } from './clients-list-entry.component';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('ClientsListEntry Component', () => {
  const clients: Client[] = [
    {
      name: 'My client',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      scopes: ['user_info'],
      grantFlows: ['CODE'],
      autoApprove: true,
      redirectUris: ['http://localhost:3000/login']
    }
  ];
  const props: ClientsListEntryPropsType = {
    ...clients[0]
  };
  const history = createMemoryHistory();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router history={history}><ClientsListEntry { ...props } /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Router history={history}><ClientsListEntry { ...props }/></Router>);

    expect(wrapper.find(ClientsListEntry).props().name).toEqual('My client');
  });

  it('should render client entry', () => {
    const wrapper = mount(<Router history={history}><ClientsListEntry { ...props }/></Router>);
    const exps = wrapper.find('.name');

    expect(exps.get(0)).toEqual(<div className="name">My client</div>);
  });
});
