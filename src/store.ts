import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { GlobalInitialState, GlobalState } from './shared/global/global.state';
import { globalReducers } from './shared/global/global.reducers';
import { loadUserInfoEpic } from './shared/global/global.epics';
import { getUserInfoRequest, getUsersRequest } from './services/user.service';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserInitialState, UserState } from './modules/user/store/user.state';
import { userReducers } from './modules/user/store/user.reducers';
import { fetchUsersEpic } from './modules/user/store/user.epics';
import { ClientInitialState, ClientState } from './modules/client/store/client.state';
import { clientReducers } from './modules/client/store/client.reducers';
import { fetchClientsEpic } from './modules/client/store/client.epics';
import { getClientsRequest } from './services/client.service';

export interface AppState {
  globalState: GlobalState;
  userState: UserState;
  clientState: ClientState;
}

const initialState: AppState = {
  globalState: GlobalInitialState,
  userState: UserInitialState,
  clientState: ClientInitialState
};

const rootReducer = combineReducers({
  globalState: globalReducers,
  userState: userReducers,
  clientState: clientReducers
});

const rootEpic = (): any => combineEpics(
    loadUserInfoEpic(getUserInfoRequest),
    fetchUsersEpic(getUsersRequest),
    fetchClientsEpic(getClientsRequest)
);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = process.env.ENV !== 'prod' ? composeWithDevTools : compose

const appStore = createStore(
    rootReducer,
    initialState,
    // @ts-ignore
    composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic());

export const store = appStore;
