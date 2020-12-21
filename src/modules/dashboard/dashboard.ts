import { selectUserInfo } from '../../shared/global/global.state';
import { AppState } from '../../store';

export interface DashboardPropsType {
  userInfo: UserInfo;
}

interface DashboardStoreState {
  userInfo: UserInfo;
}

export const mapStoreStateToProps = ({ globalState }: AppState): DashboardStoreState => ({
  userInfo: selectUserInfo(globalState)
});

export const mapStoreDispatchToProps = ({
});

export const methods = {
  componentDidMount(props: DashboardPropsType): void {
  }
};
