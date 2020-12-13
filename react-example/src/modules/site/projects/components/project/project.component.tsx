import React from 'react';
import { ProjectPropsType } from './project';

export const Project = (props: ProjectPropsType) => (
  <div>
    <div className="project-title">{ props.title }</div>
    { props.skills.map(skill => (
      <div key={ skill.toLowerCase() }>
        { skill }
      </div>
    )) }
  </div>
);
