import React from 'react'
import ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

import { GlobalLayout } from './layouts/global';
import { AUTH_TOKEN } from './utils/constants';

const httpLink = createHttpLink({
  uri: 'https://namify-api-service-prod.herokuapp.com/api'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      'x-token': token ? token : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
