import React, { Fragment } from 'react'
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link, Redirect, useHistory } from 'react-router-dom';

import { AUTH_TOKEN } from '../utils/constants';

import { Login } from '../pages/login';
import { Home } from '../pages/home';
import { Dashboard } from '../pages/dashboard';

const authToken = localStorage.getItem(AUTH_TOKEN);

const GlobalLayoutWrapper = styled.div`
  background-color: #efefef;
`;

const LogoutLink = () => {
  const history = useHistory();

  return (
    <a
      href='/'
      onClick={(e) => {
        e.preventDefault();
        localStorage.removeItem(AUTH_TOKEN);
        history.push('/');
        location.reload();
      }}
    >
      Sign Out
    </a>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const  PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      authToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export const GlobalLayout = () => {
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
                  <LogoutLink />
                </li>
              </Fragment>
            ) : (
              <li>
                <Link to='/login'>Sign In</Link>
              </li>
            )}
          </ul>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalLayoutWrapper>
)};
