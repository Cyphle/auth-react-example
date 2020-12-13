import { FetchProjectsAction, FetchProjectsFailureAction, FetchProjectsSuccessAction } from './projects.state';

export const ProjectsActionTypes = {
  FETCH_PROJECTS: 'FETCH_PROJECTS',
  FETCH_PROJECTS_SUCCESS: 'FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_FAILURE: 'FETCH_PROJECTS_FAILURE'
};

export const fetchProjectsAction = (): FetchProjectsAction => ({
  type: ProjectsActionTypes.FETCH_PROJECTS
});

export const fetchProjectsSuccessAction = (projects: Project[]): FetchProjectsSuccessAction => ({
  type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: projects
});

export const fetchProjectsFailureAction = (error: string): FetchProjectsFailureAction => ({
  type: ProjectsActionTypes.FETCH_PROJECTS_FAILURE,
  payload: error
});
