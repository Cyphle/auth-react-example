import { ArtActionTypes, fetchMediasAction, fetchMediasFailureAction, fetchMediasSuccessAction } from './art.actions';

describe('Art Actions', () => {
  it('should generate action for fetch medias', () => {
    const action = fetchMediasAction();

    expect(action).toEqual({
      type: ArtActionTypes.FETCH_ART
    });
  });

  it('should generate action for fetch medias success', () => {
    const medias: Media[] = [
      {
        id: '1',
        title: 'My drawing',
        path: '/my-drawing.jpg',
        date: 2017
      }
    ];
    const action = fetchMediasSuccessAction(medias);

    expect(action).toEqual({
      type: ArtActionTypes.FETCH_ART_SUCCESS,
      payload: medias
    });
  });

  it('should generate action for fetch medias failure', () => {
    const action = fetchMediasFailureAction('Error');

    expect(action).toEqual({
      type: ArtActionTypes.FETCH_ART_FAILURE,
      payload: 'Error'
    });
  });
});
