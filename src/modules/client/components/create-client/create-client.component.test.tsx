import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { connect, Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CreateClientComponent } from './create-client.component';
import {
  CreateClientPropsType,
  CreateClientStateType,
  mapStoreDispatchToProps,
  mapStoreStateToProps
} from './create-client';
import { createClientAction } from '../../store/client.actions';

describe('CreateClientComponent', () => {
  const client: Client = {
    name: 'My client',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    scopes: ['user_info'],
    grantFlows: ['CODE'],
    autoApprove: true,
    redirectUris: ['http://localhost:3000/login']
  }
  const createClientSpy = jest.fn();
  const props: CreateClientPropsType = {
    createClient: createClientSpy,
  };
  const store = configureStore()({});
  const MockConnectedCreateClient = connect(
      mapStoreStateToProps,
      ({
        ...mapStoreDispatchToProps,
        createClient: (client: Client): Action => {
          console.log('cocou');
          createClientSpy();
          return createClientAction(client);
        }
      })
  )(CreateClientComponent);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateClientComponent { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should initialize state', () => {
    // @ts-ignore
    const wrapper = mount(<CreateClientComponent { ...props }/>);

    expect((wrapper.state() as CreateClientStateType).scopes).toEqual(['user_info']);
  });

  it('should set launch create client action', () => {
    const wrapper = shallow(<CreateClientComponent {...props } />);
    const instance: CreateClientComponent = wrapper.instance() as CreateClientComponent;
    instance.handleChangeName({ target: { value: client.name }});
    instance.handleChangeClientId({ target: { value: client.clientId }});
    instance.handleChangeClientSecret({ target: { value: client.clientSecret }});
    const mockEvent = {
      preventDefault: () => {}
    }

    instance.handleSubmit(mockEvent);

    expect(createClientSpy).toHaveBeenCalledWith(client);
  });

  it('should launch action when connected', () => {
    // @ts-ignore
    const wrapper = mount(<Provider store={ store }><MockConnectedCreateClient { ...props }/></Provider>);

    (wrapper.find(MockConnectedCreateClient).props() as CreateClientPropsType).createClient(client);

    expect(createClientSpy).toHaveBeenCalledWith(client);
  });
});
