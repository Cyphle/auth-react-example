import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ClientTableRow } from './client-table-row.component';
import { ClientsListEntryPropsType } from './clients-list-entry';

describe('ClientTableRow', () => {
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
    ReactDOM.render(<Router history={history}><ClientTableRow { ...props } /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Router history={history}><ClientTableRow { ...props }/></Router>);

    expect(wrapper.find(ClientTableRow).props().name).toEqual('My client');
  });

  it('should render client entry', () => {
    const wrapper = mount(<Router history={history}><ClientTableRow { ...props }/></Router>);
    const exps = wrapper.find('.name');

    expect(exps.get(0).props.children).toEqual('My client');
  });
});
