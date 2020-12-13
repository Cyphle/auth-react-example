export interface ExperiencesState {
  experiences: Experience[];
}

export const experiencesInitialState: ExperiencesState = {
  experiences: []
};

export interface FetchExperiencesAction extends Action {
}

export interface FetchExperiencesSuccessAction extends Action {
  payload: Experience[];
}

export interface FetchExperienceFailureAction extends Action {
  payload: string;
}
