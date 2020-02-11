import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from '../pages/home';

const GlobalLayoutWrapper = styled.div`
  background-color:#ccc;
`;

export const GlobalLayout = () => (
    <GlobalLayoutWrapper>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <div>Dashboard component here...</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalLayoutWrapper>
);
