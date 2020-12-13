import {
  fetchArgumentsAction,
  fetchArgumentsFailureAction,
  fetchArgumentsSuccessAction,
  fetchInfosAction,
  fetchInfosFailureAction,
  fetchInfosSuccessAction, fetchSkillsAction, fetchSkillsFailureAction, fetchSkillsSuccessAction,
  fetchTrainingsAction, fetchTrainingsFailureAction,
  fetchTrainingsSuccessAction,
  HomeActionTypes
} from './home.actions';

describe('Home actions', () => {
  it('should generate action to fetch arguments', () => {
    const action = fetchArgumentsAction();

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_ARGUMENTS
    })
  });

  it('should generate action of fetch arguments success', () => {
    const args: Argument[] = [
      {
        id: '1',
        title: 'My title',
        content: 'My content',
        picto: ''
      }
    ];
    const action = fetchArgumentsSuccessAction(args);

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_ARGUMENTS_SUCCESS,
      payload: args
    })
  });

  it('should generate action of fetch arguments failure', () => {
    const action = fetchArgumentsFailureAction('Error');

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_ARGUMENTS_FAILURE,
      payload: 'Error'
    });
  });

  it('should generate action to fetch infos', () => {
    const action = fetchInfosAction();

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_INFOS
    });
  });

  it('should generate action of fetch infos success', () => {
    const infos: Info[] = [
      {
        id: '1',
        key: 'title',
        value: 'Moi'
      }
    ];
    const action = fetchInfosSuccessAction(infos);

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_INFOS_SUCCESS,
      payload: infos
    })
  });

  it('should generate action of fetch infos failure', () => {
    const action = fetchInfosFailureAction('Error');

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_INFOS_FAILURE,
      payload: 'Error'
    });
  });

  it('should generate action to fetch trainings', () => {
    const action = fetchTrainingsAction();

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_TRAININGS
    });
  });

  it('should generate action of fetch trainings success', () => {
    const trainings: Training[] = [
      {
        id: '1',
        school: 'Mines de Nantes',
        title: 'Diplôme d\'ingénieur',
        startDate: 2008,
        endDate: 2011
      }
    ];
    const action = fetchTrainingsSuccessAction(trainings);

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_TRAININGS_SUCCESS,
      payload: trainings
    })
  });

  it('should generate action of fetch trainings failure', () => {
    const action = fetchTrainingsFailureAction('Error');

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_TRAININGS_FAILURE,
      payload: 'Error'
    });
  });

  it('should generate action to fetch skills', () => {
    const action = fetchSkillsAction();

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_SKILLS
    });
  });

  it('should generate action of fetch skills success', () => {
    const skills: Skill[] = [
      {
        id: '1',
        category: 'Development',
        name: 'Java'
      }
    ];
    const action = fetchSkillsSuccessAction(skills);

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_SKILLS_SUCCESS,
      payload: skills
    })
  });

  it('should generate action of fetch skills failure', () => {
    const action = fetchSkillsFailureAction('Error');

    expect(action).toEqual({
      type: HomeActionTypes.FETCH_SKILLS_FAILURE,
      payload: 'Error'
    });
  });
});
