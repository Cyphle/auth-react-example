import { ArtState } from './art.state';
import { ArtActionTypes } from './art.actions';
import { artReducers } from './art.reducers';

describe('Art Reducers', () => {
  const reducers = artReducers;
  const medias: Media[] = [
    {
      id: '1',
      title: 'My drawing',
      path: '/my-drawing.jpg',
      date: 2017
    }
  ];
  let initialState: ArtState;

  beforeEach(() => {
    initialState = {
      medias: []
    };
  });

  it('should set state with medias when fetch medias success', () => {
    const action = {
      type: ArtActionTypes.FETCH_ART_SUCCESS,
      payload: medias
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      medias
    });
  });
});
