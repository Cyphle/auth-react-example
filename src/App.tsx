import React from 'react';
import './App.scss';
import { ConnectedLogin } from './shared/login/login.component';
import { Route, Switch } from 'react-router-dom';
import { ConnectedProtectedRoute } from './shared/protected-route/protected-route.component';
import { ConnectedUsersList } from './modules/user/components/users-list/users-list.component';
import { RouteComponentProps } from 'react-router';
import { ConnectedClientsList } from './modules/client/components/clients-list/clients-list.component';
import { ConnectedDashboard } from './modules/dashboard/dashboard.component';
import { ConnectedHeader } from './shared/header/header.component';
import { ConnectedClientDetails } from './modules/client/components/client-details/client-details.component';
import { ConnectedCreateClient } from './modules/client/components/create-client/create-client.component';
import { useCookies } from 'react-cookie';


// TODO
/*
  - protected route accept method to check authorization of current user or redirect
  - wrap the protected route to do not have ts ignore everywhere
  - Make tests for all
  - Clean all
  - Add https://material-ui.com/
  - After login does not redirect to asked page
 */

export const App = () => {
  const cookies = useCookies(['XSRF-TOKEN']);

  return (
      <div className="App">
        <ConnectedHeader/>
        <h1>Hello React OAuth2 Example</h1>

        <Switch>
          <Route path="/login" component={ ConnectedLogin }/>
          <Route exact path="/" component={ ConnectedDashboard }/>

          <Route path="/users" render={ (props: RouteComponentProps<any>) => <ConnectedProtectedRoute
              // @ts-ignore
              component={ ConnectedUsersList }
              { ...props }
          /> }/>
          <Route exact path="/clients" render={ (props: RouteComponentProps<any>) => <ConnectedProtectedRoute
              // @ts-ignore
              component={ ConnectedClientsList }
              { ...props }
          /> }/>

          <Route path="/clients/:clientId" children={ <ConnectedClientDetails/> }/>
          <Route path="/create-client" children={ <ConnectedCreateClient cookies={ cookies[0] }/> }/>
        </Switch>
      </div>
  );
};
