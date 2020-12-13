import ReactDOM from 'react-dom';
import React from 'react';
import { ContactPropsType } from './contact';
import { Contact } from './contact.component';

describe('Contact Component', () => {
  const props: ContactPropsType = {
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
