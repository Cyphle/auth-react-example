import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Media } from './media.component';
import { MediaPropsType } from './media';

describe('Media Component', () => {
  const media: Media = {
    id: '1',
    title: 'My drawing',
    path: '/my-drawing.jpg',
    date: 2017
  };
  const props: MediaPropsType = {
    ...media
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Media { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Media { ...props }/>);

    expect(wrapper.props().title).toEqual('My drawing');
  });

  it('should render media', () => {
    const wrapper = mount(<Media { ...props }/>);
    const exps = wrapper.find('.title');

    expect(exps.get(0)).toEqual(<div className="title">My drawing</div>);
  });
});
