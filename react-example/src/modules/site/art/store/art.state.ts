export interface ArtState {
  medias: Media[];
}

export const artInitialState: ArtState = {
  medias: []
};

export interface FetchMediasAction extends Action {
}

export interface FetchMediasSuccessAction extends Action {
  payload: Media[];
}

export interface FetchMediasFailureAction extends Action {
  payload: string;
}
