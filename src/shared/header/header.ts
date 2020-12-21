import { selectUserInfo } from '../global/global.state';
import { AppState } from '../../store';

export interface HeaderPropsType {
  userInfo: UserInfo;
}

interface HeaderStoreState {
  userInfo: UserInfo;
}

export const mapStateToProps = ({ globalState }: AppState): HeaderStoreState => ({
  userInfo: selectUserInfo(globalState)
});

export const mapDispatchToProps = ({
});

export const methods = {
  componentDidMount(props: HeaderPropsType): void {
  }
};

