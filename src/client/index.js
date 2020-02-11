import React from 'react'
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { GlobalLayout } from './containers/layouts/global';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalLayout />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
