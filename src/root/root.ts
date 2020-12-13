import { GlobalState, selectCurrentOrganization, selectUserInfo } from '../shared/global/global.state';
import { AppState } from '../store';
import { loadUserInfoAction } from '../shared/global/global.actions';
import { RootPropsType } from './root.typings';
import { useHistory } from 'react-router-dom';

export const mapStateToProps = ({ globalState }: AppState): GlobalState => ({
  userInfo: selectUserInfo(globalState),
  currentOrganization: selectCurrentOrganization(globalState)
});

export const mapDispatchToProps = ({
  loadUserInfo: loadUserInfoAction
});


const componentDidUpdate = (props: any, previousProps: any) => {
  console.log('I updated! Here are my current and previous props: ', props, previousProps);
  console.log(props);
};

export const methods = {
  componentDidMount(props: RootPropsType): void {
    props.loadUserInfo();
  },
  componentDidUpdate
};
