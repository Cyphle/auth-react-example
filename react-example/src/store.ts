import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { homeInitialState, HomeState } from './modules/site/home/store/home.state';
import { homeReducers } from './modules/site/home/store/home.reducers';
import { getArgumentsRequest, getInfosRequest, getSkillsRequest, getTrainingsRequest } from './services/home.service';
import {
  fetchArgumentsEpic,
  fetchInfosEpic,
  fetchSkillsEpic,
  fetchTrainingsEpic
} from './modules/site/home/store/home.epics';
import { fetchExperiencesEpic } from './modules/site/experiences/store/experiences.epics';
import { getExperiencesRequest } from './services/experiences.service';
import { experiencesInitialState, ExperiencesState } from './modules/site/experiences/store/experiences.state';
import { experiencesReducers } from './modules/site/experiences/store/experiences.reducers';
import { fetchMediasEpic } from './modules/site/art/store/art.epics';
import { getMediasRequest } from './services/art.service';
import { artInitialState, ArtState } from './modules/site/art/store/art.state';
import { artReducers } from './modules/site/art/store/art.reducers';
import { projectsInitialState, ProjectsState } from './modules/site/projects/store/projects.state';
import { projectsReducers } from './modules/site/projects/store/projects.reducers';
import { fetchProjectsEpic } from './modules/site/projects/store/projects.epics';
import { getProjectsRequest } from './services/projects.service';

export interface AppState {
  homeState: HomeState;
  experiencesState: ExperiencesState;
  artState: ArtState;
  projectsState: ProjectsState;
}

const initialState: AppState = {
  homeState: homeInitialState,
  experiencesState: experiencesInitialState,
  artState: artInitialState,
  projectsState: projectsInitialState
};

const rootReducer = combineReducers({
  homeState: homeReducers,
  experiencesState: experiencesReducers,
  artState: artReducers,
  projectsState: projectsReducers
});

const rootEpic = (): any => combineEpics(
  fetchArgumentsEpic(getArgumentsRequest),
  fetchInfosEpic(getInfosRequest),
  fetchTrainingsEpic(getTrainingsRequest),
  fetchSkillsEpic(getSkillsRequest),
  fetchExperiencesEpic(getExperiencesRequest),
  fetchMediasEpic(getMediasRequest),
  fetchProjectsEpic(getProjectsRequest)
);

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = compose;

const appStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic());

export const store = appStore;
