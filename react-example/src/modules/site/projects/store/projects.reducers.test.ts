import { projectsReducers } from './projects.reducers';
import { ProjectsState } from './projects.state';
import { ProjectsActionTypes } from './projects.actions';

describe('Projects Reducers', () => {
  const reducers = projectsReducers;
  const projects: Project[] = [
    {
      id: '1',
      title: 'Banana',
      date: 2017,
      description: 'Application simple de gestion de comptes bancaires',
      skills: ['Java', 'Spring']
    }
  ];
  let initialState: ProjectsState;

  beforeEach(() => {
    initialState = {
      projects: []
    };
  });

  it('should set state with medias when fetch medias success', () => {
    const action = {
      type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
      payload: projects
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      projects
    });
  });
});
