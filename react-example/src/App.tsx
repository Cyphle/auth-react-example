import React from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import { ConnectedHome } from './modules/site/home/components/home/home.component';
import { ConnectedExperiences } from './modules/site/experiences/components/experiences/experiences.component';
import { ConnectedGallery } from './modules/site/art/components/gallery/gallery.component';
import { ConnectProjects } from './modules/site/projects/components/projects/projects.component';
import { Contact } from './modules/site/contact/components/contact.component';

export const App = () => (
  <div className="App">
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.jpg'} /></Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/art">Galerie</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>

    <div>
      <Switch>
        <Route exact={ true } component={ ConnectedHome }/>
        <Route path="/experiences" component={ ConnectedExperiences }/>
        <Route path="/projects" component={ ConnectProjects }/>
        <Route path="/art" component={ ConnectedGallery }/>
        <Route path="/contact" component={ Contact }/>
      </Switch>
    </div>

    <footer>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/art">Galerie</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  </div>
);
