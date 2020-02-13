import React from 'react'
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Login } from '../pages/login';
import { Home } from '../pages/home';
import { Dashboard } from '../pages/dashboard';

const GlobalLayoutWrapper = styled.div`
  background-color: #efefef;
`;

export const GlobalLayout = () => (
    <GlobalLayoutWrapper>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalLayoutWrapper>
);
