import { GlobalState, selectIsAuth } from '../global/global.state';
import { createSelector } from "reselect";
import { loadUserInfoAction } from "../global/global.actions";
import { AppState } from "../../store";

export interface HeaderPropsType {
  userInfo: UserInfo;
  loadUserInfo: () => Action;
}

const globalState = (state: GlobalState): GlobalState => state;

const selectUserInfo = createSelector(
    globalState,
    (state: GlobalState): UserInfo => state.userInfo
);
const selectCurrentOrganization = createSelector(
    globalState,
    (state: GlobalState): Organization => state.currentOrganization
);

export const mapStateToProps = ({ globalState }: AppState): GlobalState => ({
  userInfo: selectUserInfo(globalState),
  currentOrganization: selectCurrentOrganization(globalState),
  authStatus: selectIsAuth(globalState)
});

export const mapDispatchToProps = ({
  loadUserInfo: loadUserInfoAction
});

export const methods = {
  componentDidMount(props: HeaderPropsType): void {
    // TODO do not lunch action, just get userInfo from store
    props.loadUserInfo();
  }
};

