import React from 'react'
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Hello le4e haxor!</h2>
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
