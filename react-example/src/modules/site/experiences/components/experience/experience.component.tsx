import React from 'react';
import { ExperiencePropsType } from './experience';

export const Experience = (props: ExperiencePropsType) => (
  <div>
    <div className="client">{props.client}</div>
  </div>
);
