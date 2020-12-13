import React from 'react';
import { ArgumentPropsType } from './argument';

export const Argument = (props: ArgumentPropsType) => (
  <div className="argument">
    <div className="picto" dangerouslySetInnerHTML={ { __html: props.picto } }>
    </div>
    <div className="title">
      { props.title }
    </div>
    <div className="content">
      { props.content }
    </div>
  </div>
);
