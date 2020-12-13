import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React, { Component } from 'react';
import { mapDispatchToProps, mapStateToProps } from './root';
import { RootPropsType } from './root.typings';
import { fakeAuthCentralState } from '../examples/fake-state';
import { Redirect, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { methods } from '../shared/header/header';
import { ConnectedLogin } from '../shared/login/login.component';
import { DashBoardLandingPage } from '../modules/dashboard/landing-page/landing-page.component';

// @ts-ignore
export const Root = ({ component: Component, ...props }) => {
  // history.push('/hello');

  return (
      <div className="root">
        {/*{ props.userInfo.firstName.length > 0 ? <DashBoardLandingPage /> : <ConnectedLogin />}*/}
        {/*<Route {...rest} render={(props) => (*/}
        {/*    fakeAuthCentralState.isAuthenticated === true ?*/}
        {/*        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />*/}
        {/*)} />*/}
      </div>
  );
};

// export class Root extends Component<RootPropsType, any> {
//   constructor(props: RootPropsType) {
//     super(props);
//   }
//
//   componentDidMount(): void {
//     this.props.loadUserInfo();
//   }
//
//   componentDidUpdate(prevProps: RootPropsType) {
//     console.log('i have been updated');
//     console.log(this.props);
//     console.log(prevProps);
//   }
//
//   render() {
//     // // @ts-ignore
//     // const { from } = this.props.location.state || { from: { pathname: '/' } };
//     // // @ts-ignore
//     // const { redirectToReferrer } = this.state;
//     // if (redirectToReferrer === true) {
//     //   // @ts-ignore
//     //   this.props.history.push(from.pathname);
//     // }
//     return (
//     <div className="root">
//         <div className="title">{ this.props.userInfo.firstName }</div>
//       {/*{ props.userInfo.firstName.length > 0 ? <Redirect to={{ pathname: '/hello'}} /> : <Redirect to={{ pathname: '/login'}} />}*/}
//     </div>
//     )
//   }
// }

export const ConnectedRoot = connect(
    mapStateToProps,
    mapDispatchToProps
)(lifecycle(methods)(Root));
