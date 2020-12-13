import React from 'react';
import './home.component.scss';
import { HomePropsType, mapDispatchToProps, mapStateToProps, methods } from './home';
import { Link } from 'react-router-dom';
import { Argument } from '../argument/argument.component';
import { Training } from '../training/training.component';
import { Skill } from '../skill/skill.component';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';

export const Home = (props: HomePropsType) => (
  <div className="home">
    <div className="main-info">
      <div className="name info">
        { (props.infos.find(info => info.key === 'homeTitle') || { value: '' }).value }
      </div>
      <div className="title info">
        { (props.infos.find(info => info.key === 'homeSubTitle') || { value: '' }).value }
      </div>
      <div className="presentation info">
        { (props.infos.find(info => info.key === 'presentation') || { value: '' }).value }
      </div>
    </div>
    <div className="arguments">
      { props.arguments.map(argument => (
        <div key={ argument.id }>
          <Argument picto={ argument.picto } title={ argument.title } content={ argument.content }/>
        </div>
      )) }
    </div>
    <div className="section-skill">
      { props.skills.map(skill => (
        <div key={ skill.id }>
          <Skill { ...skill }/>
        </div>
      )) }
    </div>
    <div className="section-list">
      <ul>
        <li>
          PICTO EXPERIENCES
          <Link to="/experiences">Experiences</Link>
        </li>
        <li>
          PICTO PROJETS
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          PICTO ART
          <Link to="/art">Galerie</Link>
        </li>
      </ul>
    </div>
    <div className="training">
      { props.trainings.map(training => (
        <div key={ training.id }>
          <Training school={ training.school } title={ training.title } startDate={ training.startDate }
                    endDate={ training.endDate }/>
        </div>
      )) }
    </div>
  </div>
);

export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(lifecycle(methods)(Home));
