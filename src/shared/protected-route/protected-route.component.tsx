import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, ProtectedRoutePropsType } from './protected-route';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...props }: ProtectedRoutePropsType) => {

  console.log(props.userInfo);
  console.log(props.isAuth);

  // EMITS 2 TIMES WHEN LOGGED:
  // - once initialized with empty username
  // - once not initialized with not empty username

  if (props.isAuth !== 'PENDING') {
    if (props.isAuth === 'AUTH') {
      return (
          // @ts-ignore
          <Route { ...props } render={ (props) => <Component {...props } /> } />
      )
    } else {
      return (
          <Route { ...props }
                 render={ (props) => <Redirect to={ { pathname: '/login', state: { from: props.location } } }/> }/>
      )
    }
  } else {
    return (
        <div>
        </div>
    )
  }
};

export const ConnectedProtectedRoute = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(ProtectedRoute));
