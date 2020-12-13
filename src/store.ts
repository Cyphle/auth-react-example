import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { globalInitialState, GlobalState } from './shared/global/global.state';
import { globalReducers } from './shared/global/global.reducers';
import { loadUserInfoEpic } from './shared/global/global.epics';
import { getUserInfoRequest, getUsersRequest } from './services/user.service';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userInitialState, UserState } from './modules/user/store/user.state';
import { userReducers } from './modules/user/store/user.reducers';
import { fetchMeEpic, fetchUsersEpic } from './modules/user/store/user.epics';

export interface AppState {
  globalState: GlobalState;
  userState: UserState;
}

const initialState: AppState = {
  globalState: globalInitialState,
  userState: userInitialState
};

const rootReducer = combineReducers({
  globalState: globalReducers,
  userState: userReducers
});

const rootEpic = (): any => combineEpics(
    loadUserInfoEpic(getUserInfoRequest),
    fetchUsersEpic(getUsersRequest),
    fetchMeEpic(getUserInfoRequest)
);

const epicMiddleware = createEpicMiddleware();
// TODO DO SOMETHING DEPENDING EN ENV
// const composeEnhancers = compose;
const composeEnhancers = composeWithDevTools;

const appStore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic());

export const store = appStore;
