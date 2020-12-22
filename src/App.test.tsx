import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('App Component', () => {
  const mockStore = configureStore();
  const store = mockStore({
    globalState: {
      userInfo: {
        username: '',
        firstName: '',
        lastName: '',
        authorities: []
      },
      currentOrganization: {
        code: '',
        name: '',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      authStatus: 'PENDING'
    },
    userState: {
      users: []
    },
    clientState: {
      clients: []
    }
  });
  const history = createMemoryHistory();

  it('renders without crashing', () => {
    const { getByText } = render(<Provider store={ store }><Router history={ history }><App/></Router></Provider>);
    const title = getByText(/Hello React OAuth2 Example/i);
    expect(title).toBeInTheDocument();
  });
});
