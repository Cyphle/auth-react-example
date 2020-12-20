import React from 'react';
import './App.scss';
import { ConnectedLogin } from './shared/login/login.component';
import { Route, Switch } from 'react-router-dom';
import { Example } from './modules/example/example';
import { ConnectedProtectedRoute } from './shared/protected-route/protected-route.component';
import { ConnectedUsersList } from './modules/user/components/users-list/users-list.component';
import { RouteComponentProps } from 'react-router';
import { ProtectedRoutePropsType } from './shared/protected-route/protected-route';


// TODO
/*
  - When user is already connected, do not launch action ? check props of protected route when change page
  - Type things
  - Make example with AuthGuard and SuperAdminAuthGuard (by passing a method in protected route component)
  - Create example with form with stateful component
  - Make tests for all
  - Clean all
 */

export const App = () => (
    <div className="App">
      <Switch>
        <Route path="/login" component={ ConnectedLogin }/>

        <Route path="/" render={ (props: RouteComponentProps<any> ) => <ConnectedProtectedRoute
            // @ts-ignore
            component={ Example }
            { ...props }
        /> }/>

        {/*<Route path="/" render={ (props) => <ConnectedUsersList*/}
        {/*    // @ts-ignore*/}
        {/*    otherParam='pouet'*/}
        {/*    component={Example}*/}
        {/*    { ...props }*/}
        {/*/> }/>*/}

        {/*<ConnectedUsersList path='/' />*/ }
        {/*<Route path="/" component={ UserComponent }/>*/ }
        {/*<ConnectedProtectedRoute path='/' component={DashBoardLandingPage} />*/ }
      </Switch>
      {/*<ConnectedRoot/>*/ }

      {/*<header className="App-header">*/ }
      {/*    <img src="data:image/jpeg;base64,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" className="App-logo" alt="logo" />*/ }
      {/*    <h1 className="App-title">Welcome to React Router Protection Sample</h1>*/ }
      {/*</header>*/ }
      {/*<BrowserRouter>*/ }
      {/*    <div>*/ }
      {/*        <AuthButton/>*/ }
      {/*        <ul>*/ }
      {/*            <li><Link to="/public">Public Content</Link></li>*/ }
      {/*            <li><Link to="/protected">Protected Content</Link></li>*/ }
      {/*        </ul>*/ }
      {/*        <Route path="/public" component={Public}/>*/ }
      {/*        /!*<Route path="/login" component={withRouter(LoginExample)}/>*!/*/ }
      {/*        <Route path="/login" component={ConnectedLoginExample}/>*/ }
      {/*        <ProtectedRoute path='/protected' component={Protected} />*/ }
      {/*    </div>*/ }
      {/*</BrowserRouter>*/ }


      {/*<ConnectedHeader />*/ }
      {/*<ConnectedLogin />*/ }


      {/*<div>*/ }
      {/*  <Switch>*/ }
      {/*    <Route exact={ true } component={ Home }/>*/ }
      {/*    <Route path="/identity" component={ ConnectedIdentity }/>*/ }
      {/*    <Route path="/experiences" component={ ConnectedExperiences }/>*/ }
      {/*    <Route path="/projects" component={ ConnectProjects }/>*/ }
      {/*    <Route path="/art" component={ ConnectedGallery }/>*/ }
      {/*    <Route path="/contact" component={ Contact }/>*/ }
      {/*  </Switch>*/ }
      {/*</div>*/ }

    </div>
);
