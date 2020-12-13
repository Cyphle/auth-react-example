import { ActionsObservable, combineEpics, createEpicMiddleware } from 'redux-observable';
import { cold, hot } from 'jest-marbles';
import { Experience } from '../components/experience/experience.component';
import { ExperiencesActionTypes, fetchExperiencesAction } from './experiences.actions';
import { fetchExperiencesEpic } from './experiences.epics';

describe('Experiences Epics', () => {
  let mockGetRequest: any;

  it('should dispatch fetch experiences success', () => {
    const experiences: Experience[] = [{
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
    }];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(experiences) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchExperiencesAction() }));

    const expectedAction$ = fetchExperiencesEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: ExperiencesActionTypes.FETCH_EXPERIENCES_SUCCESS,
        payload: experiences
      }
    }));
  });

  it('should dispatch fetch experiences failure', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchExperiencesAction() }));

    const expectedAction$ = fetchExperiencesEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: ExperiencesActionTypes.FETCH_EXPERIENCES_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
