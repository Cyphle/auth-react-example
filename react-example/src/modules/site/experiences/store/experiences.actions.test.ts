import {
  ExperiencesActionTypes,
  fetchExperiencesAction,
  fetchExperiencesFailureAction,
  fetchExperiencesSuccessAction
} from './experiences.actions';
import { Experience } from '../components/experience/experience.component';

describe('Experiences Actions', () => {
  it('should generate fetch exepriences action', () => {
    const action = fetchExperiencesAction();

    expect(action).toEqual({
      type: ExperiencesActionTypes.FETCH_EXPERIENCES
    });
  });

  it('should generate fetch experiences success action', () => {
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
    const action = fetchExperiencesSuccessAction(experiences);

    expect(action).toEqual({
      type: ExperiencesActionTypes.FETCH_EXPERIENCES_SUCCESS,
      payload: experiences
    });
  });

  it('should generate fetch experiences failure action', () => {
    const action = fetchExperiencesFailureAction('Error');

    expect(action).toEqual({
      type: ExperiencesActionTypes.FETCH_EXPERIENCES_FAILURE,
      payload: 'Error'
    });
  });
});
