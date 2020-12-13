import { homeReducers } from './home.reducers';
import { Argument } from '../components/argument/argument.component';
import { HomeState } from './home.state';
import { HomeActionTypes } from './home.actions';

describe('Home Reducers', () => {
  const reducers = homeReducers;
  const infos: Info[] = [
    {
      id: '1',
      key: 'key',
      value: 'value'
    }
  ];
  const args: Argument[] = [
    {
      id: '1',
      title: 'Title 1',
      content: 'Content 1',
      picto: ''
    },
    {
      id: '2',
      title: 'Title 2',
      content: 'Content 2',
      picto: ''
    }
  ];
  const trainings: Training[] = [
    {
      id: '1',
      school: 'Mines de Nantes',
      title: 'Diplôme d\'ingénieur',
      startDate: 2008,
      endDate: 2011
    }
  ];
  const skills: Skill[] = [
    {
      id: '1',
      category: 'Development',
      name: 'Java'
    }
  ];
  let initialState: HomeState;

  beforeEach(() => {
    initialState = {
      arguments: [],
      infos: [],
      trainings: [],
      skills: []
    };
  });

  it('should set state for arguments', () => {
    const action = {
      type: HomeActionTypes.FETCH_ARGUMENTS_SUCCESS,
      payload: args
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      arguments: args,
      infos: [],
      trainings: [],
      skills: []
    });
  });

  it('should set state for infos', () => {
    const action = {
      type: HomeActionTypes.FETCH_INFOS_SUCCESS,
      payload: infos
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      arguments: [],
      infos: infos,
      trainings: [],
      skills: []
    });
  });

  it('should set state for trainings', () => {
    const action = {
      type: HomeActionTypes.FETCH_TRAININGS_SUCCESS,
      payload: trainings
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      arguments: [],
      infos: [],
      trainings: trainings,
      skills: []
    });
  });

  it('should set state for skills', () => {
    const action = {
      type: HomeActionTypes.FETCH_SKILLS_SUCCESS,
      payload: skills
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      arguments: [],
      infos: [],
      trainings: [],
      skills: skills
    });
  });
});
