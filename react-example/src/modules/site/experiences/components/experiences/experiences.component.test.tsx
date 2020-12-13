import React from 'react';
import ReactDOM from 'react-dom';
import { ExperiencesPropsType } from './experiences';
import { Experiences } from './experiences.component';
import { Experience } from '../experience/experience.component';
import { mount } from 'enzyme';

describe('Experiences Component', () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'La Combe Du Lion Vert',
      companyLogo: '/lcdv-logo.jpg',
      companySector: 'ESN',
      role: 'Software Craftsman',
      client: 'SGCIB',
      clientLogo: '/sgcib-logo.jpg',
      clientSector: 'Banque',
      description: 'Description',
      skills: 'Java, NodeJS',
      startDate: new Date(2017, 8, 1),
      endDate: new Date(2019, 11, 1)
    }
  ];
  const props: ExperiencesPropsType = {
    experiences,
    fetchExperiences: jest.fn()
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Experiences { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Experiences { ...props }/>);

    expect(wrapper.props().experiences).toEqual(experiences);
  });

  it('should render experiences', () => {
    const wrapper = mount(<Experiences { ...props }/>);
    const exps = wrapper.find(Experience);

    expect(exps).toHaveLength(1);
  });
});
