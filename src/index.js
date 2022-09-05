import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  // fetchOptions: {
  //   mode: 'no-cors',
  // },

//   link: new createHttpLink(
//     {
//       uri: 'https://api.spacex.land/graphql/',
//       fetchOptions: {
//         mode: 'no-cors'
//       }
//     }
// ),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />,
   </ApolloProvider>,
  document.getElementById('root')
);
