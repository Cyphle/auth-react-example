import React from 'react';
import { SkillPropsType } from './skill';

export const Skill = (props: SkillPropsType) => (
  <div className="skill">
    {props.name}
  </div>
);
