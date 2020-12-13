import { FetchMediasAction, FetchMediasFailureAction, FetchMediasSuccessAction } from './art.state';

export const ArtActionTypes = {
  FETCH_ART: 'FETCH_ART',
  FETCH_ART_SUCCESS: 'FETCH_ART_SUCCESS',
  FETCH_ART_FAILURE: 'FETCH_ART_FAILURE',
};

export const fetchMediasAction = (): FetchMediasAction => ({
  type: ArtActionTypes.FETCH_ART
});

export const fetchMediasSuccessAction = (medias: Media[]): FetchMediasSuccessAction => ({
  type: ArtActionTypes.FETCH_ART_SUCCESS,
  payload: medias
});

export const fetchMediasFailureAction = (error: string): FetchMediasFailureAction => ({
  type: ArtActionTypes.FETCH_ART_FAILURE,
  payload: error
});
