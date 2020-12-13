import { globalInitialState, GlobalState } from "./global.state";
import { GlobalActionTypes } from "./global.actions";
import { findFirstOrganizationOfUser, findOrganizationByCode } from "../../common/helpers/user-info.extractors";

export const globalReducers = (state = globalInitialState, action: Action): GlobalState => {
  switch (action.type) {
    case GlobalActionTypes.LOAD_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        currentOrganization: state.currentOrganization.code.length > 0 ? state.currentOrganization : findFirstOrganizationOfUser(action.payload)
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

