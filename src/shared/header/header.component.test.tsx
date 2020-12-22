import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Header } from './header.component';
import { HeaderPropsType } from './header';

describe('HeaderComponent', () => {
  const userInfo: UserInfo = {
    username: 'john.doe@dodo.fr',
    firstName: 'John',
    lastName: 'Doe',
    authorities: []
  };
  const mockStore = configureStore();
  const store = mockStore({
    globalState: {
      userInfo
    }
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={ store }><Router><Header userInfo={ userInfo }/></Router></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
