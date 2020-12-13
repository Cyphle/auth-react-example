import React from 'react';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import { GalleryPropsType, mapDispatchToProps, mapStateToProps, methods } from './gallery';
import { Media } from '../media/media.component';

export const Gallery = (props: GalleryPropsType) => (
  <div>
    { props.medias.map(media => (
      <div key={ media.id }>
        <Media { ...media } />
      </div>
    )) }
  </div>
);

export const ConnectedGallery = connect(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(methods)(Gallery));
