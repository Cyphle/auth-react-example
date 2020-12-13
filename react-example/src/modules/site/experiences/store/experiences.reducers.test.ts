import { Experience } from '../components/experience/experience.component';
import { ExperiencesState } from './experiences.state';
import { ExperiencesActionTypes } from './experiences.actions';
import { experiencesReducers } from './experiences.reducers';

describe('Experiences Reducers', () => {
  const reducers = experiencesReducers;
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
      description: 'Intégration d\'Extia en tant que product owner, j\'ai été envoyé en mission chez BNP Paribas Real Estate dans le département marketing afin de gérer des problématiques de sites.\n<br>\nJ\'ai également développé pour Extia une application mobile sur une question de disponibilité de box et salles de réunions. Vous pouvez lire la présentation de l\'application qui s\'appelle Dispobox dans la section <a href="/projects">projets</a>.\n<br>\nJ\'ai aussi participé à la création d\'un groupe communautaire autour de l\'agilité et ai participé à l\'animation des communautés Java et Javascript.',
      skills: 'Java, NodeJS',
      startDate: new Date(2017, 8, 1),
      endDate: new Date(2019, 11, 1)
    }
  ];
  let initialState: ExperiencesState;

  beforeEach(() => {
    initialState = {
      experiences: []
    }
  });

  it('should set state for experiences', () => {
    const action = {
      type: ExperiencesActionTypes.FETCH_EXPERIENCES_SUCCESS,
      payload: experiences
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      experiences
    });
  });
});
