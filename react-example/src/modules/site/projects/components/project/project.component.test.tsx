import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { ProjectPropsType } from './project';
import { Project } from './project.component';

describe('Project Component', () => {
  const project: Project = {
    id: '1',
    title: 'Banana',
    date: 2017,
    description: 'Application simple de gestion de comptes bancaires',
    skills: ['Java', 'Spring']
  };
  const props: ProjectPropsType = {
    ...project
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Project { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Project { ...props }/>);

    expect(wrapper.props().title).toEqual('Banana');
  });

  it('should render project', () => {
    const wrapper = mount(<Project { ...props }/>);
    const exps = wrapper.find('.project-title');

    expect(exps.get(0)).toEqual(<div className="project-title">Banana</div>);
  });
});
