export interface ProjectsState {
  projects: Project[];
}

export const projectsInitialState: ProjectsState = {
  projects: []
};

export interface FetchProjectsAction extends Action {
}

export interface FetchProjectsSuccessAction extends Action {
  payload: Project[];
}

export interface FetchProjectsFailureAction extends Action {
  payload: string;
}
