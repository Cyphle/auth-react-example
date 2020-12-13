import React from 'react';
import { MediaPropsType } from './media';

export const Media = (props: MediaPropsType) => (
  <div>
    <div className="title">{ props.title }</div>
  </div>
);
