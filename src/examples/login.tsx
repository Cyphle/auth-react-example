import React, { Component } from 'react';
import { fakeAuthCentralState } from './fake-state';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import lifecycle from "react-pure-lifecycle";
import { Header } from '../shared/header/header.component';
import { AppState } from '../store';
import { GlobalState, selectIsAuth } from '../shared/global/global.state';
import { loadUserInfoAction } from '../shared/global/global.actions';
import { createSelector } from 'reselect';
import { HeaderPropsType } from '../shared/header/header';


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

export class LoginExample extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  componentDidMount(): void {
    // console.log('cocuou');
    // console.log(this.props);
    // @ts-ignore
    this.props.loadUserInfo();
  }

  login = () => {
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render() {
    // @ts-ignore
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // @ts-ignore
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      // @ts-ignore
      this.props.history.push(from.pathname);
    }
    return (
        <div>
          <p>Please, you need to be authenticated to to view this content</p>
          <button onClick={this.login}>Log in</button>
        </div>
    )
  }
}

export const ConnectedLoginExample = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginExample);


export const AuthButton = withRouter(({ history }) => (
    fakeAuthCentralState.isAuthenticated ? (
        <p>Welcome to this amazing content! <button onClick={() => {
          fakeAuthCentralState.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
));
