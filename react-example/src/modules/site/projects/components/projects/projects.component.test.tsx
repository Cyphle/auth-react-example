import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import React from 'react';
import { ProjectsPropsType } from './projects';
import { Projects } from './projects.component';
import { Project } from '../project/project.component';

describe('Projects Component', () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Banana',
      date: 2017,
      description: 'Application simple de gestion de comptes bancaires',
      skills: ['Java', 'Spring']
    }
  ];
  const props: ProjectsPropsType = {
    projects,
    fetchProjects: jest.fn()
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Projects { ...props }/>);

    expect(wrapper.props().projects).toEqual(projects);
  });

  it('should render projects', () => {
    const wrapper = mount(<Projects { ...props }/>);
    const exps = wrapper.find(Project);

    expect(exps).toHaveLength(1);
  });
});
