import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphqlzero.almansi.me/api"
});

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
