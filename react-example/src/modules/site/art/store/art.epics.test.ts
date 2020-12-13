import { ActionsObservable } from 'redux-observable';
import { cold, hot } from 'jest-marbles';
import { ArtActionTypes, fetchMediasAction } from './art.actions';
import { fetchMediasEpic } from './art.epics';

describe('Art Epics', () => {
  let mockGetRequest: any;

  it('should dispatch fetch medias success action', () => {
    const medias: Media[] = [
      {
        id: '1',
        title: 'My drawing',
        path: '/my-drawing.jpg',
        date: 2017
      }
    ];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(medias) } });
    const action$ = new ActionsObservable(hot('-a', { a: fetchMediasAction() }));

    const expectedAction$ = fetchMediasEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('--a', {
      a: {
        type: ArtActionTypes.FETCH_ART_SUCCESS,
        payload: medias
      }
    }));
  });

  it('should dispatch fetch medias failure action', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchMediasAction() }));

    const expectedAction$ = fetchMediasEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: ArtActionTypes.FETCH_ART_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
