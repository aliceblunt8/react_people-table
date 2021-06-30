import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home';
import { PeoplePage } from './components/PeoplePage';

export const App = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/people">People</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/people/:slug?">
        <PeoplePage />
      </Route>

      <Redirect from="/home" to="/" />

      <Route>
        Page not found
      </Route>
    </Switch>
  </div>
);
