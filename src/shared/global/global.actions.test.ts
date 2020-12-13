import { GlobalActionTypes, loadUserInfoAction } from './global.actions';

describe('Global Actions', () => {
  it('should generate action for fetch medias', () => {
    const action = loadUserInfoAction();

    expect(action).toEqual({
      type: GlobalActionTypes.LOAD_USER_INFO
    });
  });

  // TODO to complete
  // it('should generate action for fetch medias success', () => {
  //   const medias: Media[] = [
  //     {
  //       id: '1',
  //       title: 'My drawing',
  //       path: '/my-drawing.jpg',
  //       date: 2017
  //     }
  //   ];
  //   const action = fetchMediasSuccessAction(medias);
  //
  //   expect(action).toEqual({
  //     type: ArtActionTypes.FETCH_ART_SUCCESS,
  //     payload: medias
  //   });
  // });
  //
  // it('should generate action for fetch medias failure', () => {
  //   const action = fetchMediasFailureAction('Error');
  //
  //   expect(action).toEqual({
  //     type: ArtActionTypes.FETCH_ART_FAILURE,
  //     payload: 'Error'
  //   });
  // });
});
