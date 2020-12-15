import React from 'react';
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

const App = () => {
  return (
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
  );
};

export default App;
