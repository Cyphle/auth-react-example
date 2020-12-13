import {
  fetchProjectsAction,
  fetchProjectsFailureAction,
  fetchProjectsSuccessAction,
  ProjectsActionTypes
} from './projects.actions';

describe('Projects Actions', () => {
  it('should generate fetch projects action', () => {
    const action = fetchProjectsAction();

    expect(action).toEqual({
      type: ProjectsActionTypes.FETCH_PROJECTS
    });
  });

  it('should generate fetch projects success action', () => {
    const projects: Project[] = [
      {
        id: '1',
        title: 'Banana',
        date: 2017,
        description: 'Application simple de gestion de comptes bancaires',
        skills: ['Java', 'Spring']
      }
    ];
    const action = fetchProjectsSuccessAction(projects);

    expect(action).toEqual({
      type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
      payload: projects
    });
  });

  it('should generate fetch projects failure action', () => {
    const action = fetchProjectsFailureAction('Error');

    expect(action).toEqual({
      type: ProjectsActionTypes.FETCH_PROJECTS_FAILURE,
      payload: 'Error'
    })
  });
});
