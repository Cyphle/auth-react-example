import { ActionsObservable } from 'redux-observable';
import { cold, hot } from 'jest-marbles';
import { Argument } from '../components/argument/argument.component';
import {
  fetchArgumentsAction,
  fetchInfosAction,
  fetchSkillsAction,
  fetchTrainingsAction,
  HomeActionTypes
} from './home.actions';
import { fetchArgumentsEpic, fetchInfosEpic, fetchSkillsEpic, fetchTrainingsEpic } from './home.epics';

describe('Home Epics', () => {
  let mockGetRequest: any;

  it('should dispatch fetch arguments success', () => {
    const args: Argument[] = [
      {
        id: '1',
        title: 'Title 1',
        content: 'Content 1',
        picto: ''
      },
      {
        id: '2',
        title: 'Title 2',
        content: 'Content 2',
        picto: ''
      }
    ];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(args) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchArgumentsAction() }));

    const expectedAction$ = fetchArgumentsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: HomeActionTypes.FETCH_ARGUMENTS_SUCCESS,
        payload: args
      }
    }));
  });

  it('should dispatch fetch arguments failure', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchArgumentsAction() }));

    const expectedAction$ = fetchArgumentsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: HomeActionTypes.FETCH_ARGUMENTS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });

  it('should dispatch fetch infos success', () => {
    const infos: Info[] = [
      {
        id: '1',
        key: 'name',
        value: 'Moi'
      },
      {
        id: '2',
        key: 'title',
        value: 'Mine'
      }
    ];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(infos) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchInfosAction() }));

    const expectedAction$ = fetchInfosEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: HomeActionTypes.FETCH_INFOS_SUCCESS,
        payload: infos
      }
    }));
  });

  it('should dispatch fetch arguments failure', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchInfosAction() }));

    const expectedAction$ = fetchInfosEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: HomeActionTypes.FETCH_INFOS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });

  it('should dispatch fetch trainings success', () => {
    const trainings: Training[] = [
      {
        id: '1',
        school: 'Ecole',
        title: 'Diplome',
        startDate: 2018,
        endDate: 2020
      }
    ];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(trainings) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchTrainingsAction() }));

    const expectedAction$ = fetchTrainingsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: HomeActionTypes.FETCH_TRAININGS_SUCCESS,
        payload: trainings
      }
    }));
  });

  it('should dispatch fetch trainings failure', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchTrainingsAction() }));

    const expectedAction$ = fetchTrainingsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: HomeActionTypes.FETCH_TRAININGS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });

  it('should dispatch fetch skill success', () => {
    const skills: Skill[] = [
      {
        id: '1',
        category: 'Development',
        name: 'Java'
      }
    ];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(skills) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchSkillsAction() }));

    const expectedAction$ = fetchSkillsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: HomeActionTypes.FETCH_SKILLS_SUCCESS,
        payload: skills
      }
    }));
  });

  it('should dispatch fetch skills failure', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchSkillsAction() }));

    const expectedAction$ = fetchSkillsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: HomeActionTypes.FETCH_SKILLS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
