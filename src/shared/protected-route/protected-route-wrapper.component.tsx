import { Route } from 'react-router-dom';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ConnectedProtectedRoute } from './protected-route.component';

export const ProtectedRouteWrapper = ({ component: Component, ...props }: any) => {
    return (
        <Route path={ props.path } render={ (props: RouteComponentProps<any>) => <ConnectedProtectedRoute
            // @ts-ignore
            component={ Component }
            { ...props }
        /> }/>
    )
};