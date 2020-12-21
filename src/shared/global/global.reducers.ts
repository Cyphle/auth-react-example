import { GlobalInitialState, GlobalState } from "./global.state";
import { GlobalActionTypes } from "./global.actions";
import { findFirstOrganizationOfUser, findOrganizationByCode } from "../../common/helpers/user-info.extractors";

export const globalReducers = (state = GlobalInitialState, action: Action): GlobalState => {
  switch (action.type) {
    case GlobalActionTypes.LOAD_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        currentOrganization: state.currentOrganization.code.length > 0 ? state.currentOrganization : findFirstOrganizationOfUser(action.payload),
        authStatus: action.payload.username.length > 0 ? 'AUTH' : 'NOT_AUTH'
      };
    case GlobalActionTypes.UPDATE_CURRENT_ORGANIZATION:
      return {
        ...state,
        currentOrganization: findOrganizationByCode(state.userInfo, action.payload),
      };
    default:
      return state;
  }
};

