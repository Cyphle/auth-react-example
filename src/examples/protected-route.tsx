import React from 'react';
import { fakeAuthCentralState } from './fake-state';
import { Route, Redirect } from 'react-router-dom';

// @ts-ignore
export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ (props) => (
        fakeAuthCentralState.isAuthenticated === true ?
            <Component { ...props } /> : <Redirect to={ { pathname: '/login', state: { from: props.location } } }/>
    ) }/>
);
