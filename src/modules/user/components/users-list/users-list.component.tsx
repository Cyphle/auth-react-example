import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, UsersListPropsType } from './users-list';
import { UsersListEntry } from '../users-list-entry/users-list-entry.component';
import { fakeAuthCentralState } from '../../../../examples/fake-state';
import { Redirect, Route } from 'react-router-dom';
import { Example } from '../../../example/example';
import { ConnectedLogin } from '../../../../shared/login/login.component';

// export const UsersList = ({ component: Component, ...props }: UsersListPropsType) => {
export const UsersList = ({ component: Component, ...props }: any) => {
  // <div>
  //   { props.users.map(user => (
  //       <div key={ user.username }>
  //         <UsersListEntry { ...user } />
  //       </div>
  //   )) }
  // </div>

  console.log(props.userInfo);
  console.log(props.initialized);

  // EMITS 2 TIMES WHEN LOGGED:
  // - once initialized with empty username
  // - once not initialized with not empty username

  if (props.initialized > 0) {
    if (props.userInfo.username.length > 0) {
      return (
          <Route { ...props } render={ (props) => <Component {...props } /> } />
      )
    } else {
      return (
          <Route { ...props }
                 render={ (props) => <Redirect to={ { pathname: '/login', state: { from: props.location } } }/> }/>
      )
    }
  }
  return (
      <div>
        Hello world
        { props.userInfo.username }
        <br/>
        { props.otherParam }
      </div>
  )
};

export const ConnectedUsersList = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(UsersList));
