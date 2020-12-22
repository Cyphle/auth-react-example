import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';
import React from 'react';
import { mapStoreDispatchToProps, mapStoreStateToProps, methods, ProtectedRoutePropsType } from './protected-route';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...props }: ProtectedRoutePropsType) => {
  switch (props.isAuth) {
    case 'AUTH':
      const guardResult = props.guard(props.userInfo);
      if (guardResult.length === 0) {
        return (
            // @ts-ignore
            <Route { ...props } render={ (props) => <Component {...props } /> } />
        )
      } else {
        return (
            <Route { ...props }
                   render={ (props) => <Redirect to={ { pathname: guardResult, state: { from: props.location } } }/> }/>
        )
      }
    case 'NOT_AUTH':
      return (
          <Route { ...props }
                 render={ (props) => <Redirect to={ { pathname: '/login', state: { from: props.location } } }/> }/>
      )
    case 'PENDING':
    default:
      return (
          <div></div>
      )
  }
};

export const ConnectedProtectedRoute = connect(
    mapStoreStateToProps,
    mapStoreDispatchToProps
)(lifecycle(methods)(ProtectedRoute));
