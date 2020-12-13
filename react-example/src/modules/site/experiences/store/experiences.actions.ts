import {
  FetchExperienceFailureAction,
  FetchExperiencesAction,
  FetchExperiencesSuccessAction
} from './experiences.state';

export const ExperiencesActionTypes = {
  FETCH_EXPERIENCES: 'FETCH_EXPERIENCES',
  FETCH_EXPERIENCES_SUCCESS: 'FETCH_EXPERIENCES_SUCCESS',
  FETCH_EXPERIENCES_FAILURE: 'FETCH_EXPERIENCES_FAILURE'
};

export const fetchExperiencesAction = (): FetchExperiencesAction => ({
  type: ExperiencesActionTypes.FETCH_EXPERIENCES
});

export const fetchExperiencesSuccessAction = (experiences: Experience[]): FetchExperiencesSuccessAction => ({
  type: ExperiencesActionTypes.FETCH_EXPERIENCES_SUCCESS,
  payload: experiences
});

export const fetchExperiencesFailureAction = (error: string): FetchExperienceFailureAction => ({
  type: ExperiencesActionTypes.FETCH_EXPERIENCES_FAILURE,
  payload: error
});
