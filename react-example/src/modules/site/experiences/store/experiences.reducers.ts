import { experiencesInitialState, ExperiencesState } from './experiences.state';
import { ExperiencesActionTypes } from './experiences.actions';

export const experiencesReducers = (state = experiencesInitialState, action: Action): ExperiencesState =>
  action.type === ExperiencesActionTypes.FETCH_EXPERIENCES_SUCCESS
    ? { ...state, experiences: action.payload }
    : state
