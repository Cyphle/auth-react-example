import ReactDOM from 'react-dom';
import { Experience } from './experience.component';
import React from 'react';
import { ExperiencePropsType } from './experience';
import { mount } from 'enzyme';

describe('Experience Component', () => {
  const experience: Experience = {
    id: '1',
    company: 'La Combe Du Lion Vert',
    companyLogo: '/lcdv-logo.jpg',
    companySector: 'ESN',
    role: 'Software Craftsman',
    client: 'SGCIB',
    clientLogo: '/sgcib-logo.jpg',
    clientSector: 'Banque',
    description: 'Intégration d\'Extia en tant que product owner, j\'ai été envoyé en mission chez BNP Paribas Real Estate dans le département marketing afin de gérer des problématiques de sites.\n<br>\nJ\'ai également développé pour Extia une application mobile sur une question de disponibilité de box et salles de réunions. Vous pouvez lire la présentation de l\'application qui s\'appelle Dispobox dans la section <a href="/projects">projets</a>.\n<br>\nJ\'ai aussi participé à la création d\'un groupe communautaire autour de l\'agilité et ai participé à l\'animation des communautés Java et Javascript.',
    skills: 'Java, NodeJS',
    startDate: new Date(2017, 8, 1),
    endDate: new Date(2019, 11, 1)
  };
  const props: ExperiencePropsType = {
    ...experience
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Experience { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set props', () => {
    const wrapper = mount(<Experience { ...props }/>);

    expect(wrapper.props().company).toEqual('La Combe Du Lion Vert');
  });

  it('should render experiences', () => {
    const wrapper = mount(<Experience { ...props }/>);
    const exps = wrapper.find('.client');

    expect(exps.get(0)).toEqual(<div className="client">SGCIB</div>);
  });
});
