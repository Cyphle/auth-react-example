import * as React from 'react';
import { mapDispatchToProps, mapStateToProps, methods, ProjectsPropsType } from './projects';
import { Project } from '../project/project.component';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';

export const Projects = (props: ProjectsPropsType) => (
  <div>
    { props.projects.map(project => (
      <div key={ project.id}>
        <Project { ...project } />
      </div>
    ))}
  </div>
);

export const ConnectProjects = connect(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(methods)(Projects));
