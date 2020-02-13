import React, { Fragment } from 'react'
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { AUTH_TOKEN } from '../utils/constants';

import { Login } from '../pages/login';
import { Home } from '../pages/home';
import { Dashboard } from '../pages/dashboard';

const authToken = localStorage.getItem(AUTH_TOKEN);

const GlobalLayoutWrapper = styled.div`
  background-color: #efefef;
`;

export const GlobalLayout = () => {
  // Render
  return (
    <GlobalLayoutWrapper>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {authToken ? (
              <Fragment>
                <li>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                  <a
                    href='/'
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem(AUTH_TOKEN);
                      // TODO!  Do redirect back a page here!!!
                    }}
                  >
                    Sign Out
                  </a>
                </li>
              </Fragment>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            {authToken ? (
              <Route path='/dashboard'>
                <Dashboard />
              </Route>
            ) : (
              <Route path='/login'>
                <Login />
              </Route>
            )}
          </Switch>
        </div>
      </Router>
    </GlobalLayoutWrapper>
)};
