import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { connect, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import lifecycle from 'react-pure-lifecycle';
import { ClientsListPropsType, mapStoreDispatchToProps, mapStoreStateToProps, methods } from './clients-list';
import { fetchClientsAction } from '../../store/client.actions';
import { ClientsList } from './clients-list.component';
import { ClientsListEntry } from '../clients-list-entry/clients-list-entry.component';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('ClientsListComponent', () => {
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
  const fetchClientsSpy = jest.fn();
  const props: ClientsListPropsType = {
    clients,
    fetchClients: fetchClientsSpy,
  };
  const store = configureStore()({
    clientState: {
      clients
    }
  });
  const MockConnectedClientsList = connect(
      mapStoreStateToProps,
      ({
        ...mapStoreDispatchToProps,
        fetchClients: (): Action => {
          fetchClientsSpy();
          return fetchClientsAction();
        }
      })
  )(lifecycle(methods)(ClientsList));
  const history = createMemoryHistory();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router history={history}><ClientsList { ...props } /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Router history={history}><ClientsList { ...props }/></Router>);

    expect(wrapper.find(ClientsList).props().clients).toEqual(clients);
  });

  it('should render clients', () => {
    const wrapper = mount(<Router history={history}><ClientsList { ...props }/></Router>);
    const exps = wrapper.find(ClientsListEntry);

    expect(exps).toHaveLength(1);
  });

  it('should launch action when component did mount', () => {
    const wrapper = mount(<Provider store={ store }><Router history={history}><MockConnectedClientsList { ...props }/></Router></Provider>);

    expect((wrapper.find(MockConnectedClientsList).props() as ClientsListPropsType).clients).toEqual(clients);
    expect(fetchClientsSpy).toHaveBeenCalled();
  });
});
