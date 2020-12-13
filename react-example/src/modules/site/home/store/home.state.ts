export interface HomeState {
  infos: Info[];
  arguments: Argument[];
  trainings: Training[];
  skills: [];
}

export const homeInitialState: HomeState = {
  infos: [],
  arguments: [],
  trainings: [],
  skills: []
};

export interface FetchArgumentsAction extends Action {
}

export interface FetchArgumentsSuccessAction extends Action {
  payload: Argument[];
}

export interface FetchArgumentsFailureAction extends Action {
  payload: string;
}

export interface FetchInfosAction extends Action {
}

export interface FetchInfosSuccessAction extends Action {
  payload: Info[];
}

export interface FetchInfosFailureAction extends Action {
  payload: string;
}

export interface FetchTrainingsAction extends Action {
}

export interface FetchTrainingsSuccessAction extends Action {
  payload: Training[];
}

export interface FetchTrainingsFailureAction extends Action {
  payload: string;
}

export interface FetchSkillsAction extends Action {
}

export interface FetchSkillsSuccessAction extends Action {
  payload: Skill[];
}

export interface FetchSkillsFailureAction extends Action {
  payload: string;
}
