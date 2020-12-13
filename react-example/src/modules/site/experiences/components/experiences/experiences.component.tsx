import React from 'react';
import { ExperiencesPropsType, mapDispatchToProps, mapStateToProps, methods } from './experiences';
import { Experience } from '../experience/experience.component';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';

export const Experiences = (props: ExperiencesPropsType) => (
  <div>
    <ul>
      { props.experiences.map(experience => (
        <li key={ experience.id }>
          <Experience { ...experience } />
        </li>
      )) }
    </ul>
  </div>
);

export const ConnectedExperiences = connect(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(methods)(Experiences));
