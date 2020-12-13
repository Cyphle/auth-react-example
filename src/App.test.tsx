import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import configureStore from 'redux-mock-store';

describe('App Component', () => {
  const mockStore = configureStore();
  const store = mockStore({
  });

  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
