import { cold, hot } from 'jest-marbles';
import { ActionsObservable } from 'redux-observable';
import { fetchProjectsAction, ProjectsActionTypes } from './projects.actions';
import { fetchProjectsEpic } from './projects.epics';

describe('Projects Epics', () => {
  let mockGetRequest: any;

  it('should dispatch fetch projects success action', () => {
    const projects: Project[] = [
      {
        id: '1',
        title: 'Banana',
        date: 2017,
        description: 'Application simple de gestion de comptes bancaires',
        skills: ['Java', 'Spring']
      }
    ];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(projects) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchProjectsAction() }));

    const expectedAction$ = fetchProjectsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
        payload: projects
      }
    }));
  });

  it('should dispatch fetch projects failure action', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchProjectsAction() }));

    const expectedAction$ = fetchProjectsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: ProjectsActionTypes.FETCH_PROJECTS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
