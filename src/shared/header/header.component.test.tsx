import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Header } from './header.component';

describe('src/shared/header/header.component', () => {
  const mockStore = configureStore();
  const store = mockStore({
    homeState: {},
    togglesState: {
      groupName: '',
      toggles: []
    },
    groupsState: {
      groupsByEnv: []
    }
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={ store }><Router><Header /></Router></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
