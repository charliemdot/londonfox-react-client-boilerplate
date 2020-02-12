import React from 'react'
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

import { GlobalLayout } from './containers/layouts/global';

const client = new ApolloClient({
  uri: 'http://localhost:8001/api',
});

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #D8D8D8;
  }
`;

const App = () => (
  <ApolloProvider client={client}>
    <Reset />
    <GlobalStyle />
    <GlobalLayout />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
