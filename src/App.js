import React from 'react';
import { CookiesProvider } from 'react-cookie';

import Home from './pages/Home';

import { GlobalStyles } from './assets/globalStyles';

const App = () => {
  return (
    <CookiesProvider>
      <Home />
      <GlobalStyles />
    </CookiesProvider>
  );
};

export default App;
