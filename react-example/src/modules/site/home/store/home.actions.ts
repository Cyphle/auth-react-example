import {
  FetchArgumentsAction,
  FetchArgumentsFailureAction,
  FetchArgumentsSuccessAction,
  FetchInfosAction,
  FetchInfosFailureAction,
  FetchInfosSuccessAction, FetchSkillsAction, FetchSkillsFailureAction, FetchSkillsSuccessAction,
  FetchTrainingsAction,
  FetchTrainingsFailureAction,
  FetchTrainingsSuccessAction
} from './home.state';

export const HomeActionTypes = {
  FETCH_ARGUMENTS: 'FETCH_ARGUMENTS',
  FETCH_ARGUMENTS_SUCCESS: 'FETCH_ARGUMENTS_SUCCESS',
  FETCH_ARGUMENTS_FAILURE: 'FETCH_ARGUMENTS_FAILURE',
  FETCH_INFOS: 'FETCH_INFOS',
  FETCH_INFOS_SUCCESS: 'FETCH_INFOS_SUCCESS',
  FETCH_INFOS_FAILURE: 'FETCH_INFOS_FAILURE',
  FETCH_TRAININGS: 'FETCH_TRAININGS',
  FETCH_TRAININGS_SUCCESS: 'FETCH_TRAININGS_SUCCESS',
  FETCH_TRAININGS_FAILURE: 'FETCH_TRAININGS_FAILURE',
  FETCH_SKILLS: 'FETCH_SKILLS',
  FETCH_SKILLS_SUCCESS: 'FETCH_SKILLS_SUCCESS',
  FETCH_SKILLS_FAILURE: 'FETCH_SKILLS_FAILURE'
};

export const fetchArgumentsAction = (): FetchArgumentsAction => ({
  type: HomeActionTypes.FETCH_ARGUMENTS
});

export const fetchArgumentsSuccessAction = (args: Argument[]): FetchArgumentsSuccessAction => ({
  type: HomeActionTypes.FETCH_ARGUMENTS_SUCCESS,
  payload: args
});

export const fetchArgumentsFailureAction = (error: string): FetchArgumentsFailureAction => ({
  type: HomeActionTypes.FETCH_ARGUMENTS_FAILURE,
  payload: error
});

export const fetchInfosAction = (): FetchInfosAction => ({
  type: HomeActionTypes.FETCH_INFOS
});

export const fetchInfosSuccessAction = (infos: Info[]): FetchInfosSuccessAction => ({
  type: HomeActionTypes.FETCH_INFOS_SUCCESS,
  payload: infos
});

export const fetchInfosFailureAction = (error: string): FetchInfosFailureAction => ({
  type: HomeActionTypes.FETCH_INFOS_FAILURE,
  payload: error
});

export const fetchTrainingsAction = (): FetchTrainingsAction => ({
  type: HomeActionTypes.FETCH_TRAININGS
});

export const fetchTrainingsSuccessAction = (trainings: Training[]): FetchTrainingsSuccessAction => ({
  type: HomeActionTypes.FETCH_TRAININGS_SUCCESS,
  payload: trainings
});

export const fetchTrainingsFailureAction = (error: string): FetchTrainingsFailureAction => ({
  type: HomeActionTypes.FETCH_TRAININGS_FAILURE,
  payload: error
});

export const fetchSkillsAction = (): FetchSkillsAction => ({
  type: HomeActionTypes.FETCH_SKILLS
});

export const fetchSkillsSuccessAction = (skills: Skill[]): FetchSkillsSuccessAction => ({
  type: HomeActionTypes.FETCH_SKILLS_SUCCESS,
  payload: skills
});

export const fetchSkillsFailureAction = (error: string): FetchSkillsFailureAction => ({
  type: HomeActionTypes.FETCH_SKILLS_FAILURE,
  payload: error
});
