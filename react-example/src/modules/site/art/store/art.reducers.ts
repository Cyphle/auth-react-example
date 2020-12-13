import { artInitialState, ArtState } from './art.state';
import { ArtActionTypes } from './art.actions';

export const artReducers = (state = artInitialState, action: Action): ArtState =>
  action.type === ArtActionTypes.FETCH_ART_SUCCESS
    ? { ...state, medias: action.payload }
    : state;
