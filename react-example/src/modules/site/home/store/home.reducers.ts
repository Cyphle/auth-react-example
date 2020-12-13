import { homeInitialState, HomeState } from './home.state';
import { HomeActionTypes } from './home.actions';

export const homeReducers = (state = homeInitialState, action: Action): HomeState => {
  switch (action.type) {
    case HomeActionTypes.FETCH_ARGUMENTS_SUCCESS:
      return {
        ...state,
        arguments: action.payload
      };
    case HomeActionTypes.FETCH_INFOS_SUCCESS:
      return {
        ...state,
        infos: action.payload
      };
    case HomeActionTypes.FETCH_TRAININGS_SUCCESS:
      return {
        ...state,
        trainings: action.payload
      };
    case HomeActionTypes.FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skills: action.payload
      }
    default:
      return state;
  }
};
