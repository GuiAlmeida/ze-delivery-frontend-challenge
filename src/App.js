import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CookiesProvider } from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

import { GlobalStyles } from './assets/globalStyles';

const client = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route exact path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </CookiesProvider>
    </ApolloProvider>
  );
};

export default App;
