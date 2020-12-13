import { projectsInitialState, ProjectsState } from './projects.state';
import { ProjectsActionTypes } from './projects.actions';

export const projectsReducers = (state = projectsInitialState, action: Action): ProjectsState =>
  action.type === ProjectsActionTypes.FETCH_PROJECTS_SUCCESS
    ? { ...state, projects: action.payload }
    : state;
