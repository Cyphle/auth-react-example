import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { GalleryPropsType } from './gallery';
import { Gallery } from './gallery.component';
import { Media } from '../media/media.component';

describe('Gallery Component', () => {
  const medias: Media[] = [
    {
      id: '1',
      title: 'My drawing',
      path: '/my-drawing.jpg',
      date: 2017
    }
  ];
  const props: GalleryPropsType = {
    medias,
    fetchMedias: jest.fn()
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gallery { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Gallery { ...props }/>);

    expect(wrapper.props().medias).toEqual(medias);
  });

  it('should render medias', () => {
    const wrapper = mount(<Gallery { ...props }/>);
    const exps = wrapper.find(Media);

    expect(exps).toHaveLength(1);
  });
});
