import ReactDOM from 'react-dom';
import React from 'react';
import { ClientDetailsPropsType } from './client-details';
import { ClientDetails } from './client-details.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    clientId: 'clientId'
  }),
  useRouteMatch: () => ({ url: '/clients/clientId' }),
}));

describe('ClientDetails', () => {
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
  const props: ClientDetailsPropsType = {
    clients
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ClientDetails { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
