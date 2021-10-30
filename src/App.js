import React from 'react';

import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import './styles/index.scss';
import ReactGA from 'react-ga';
import createTransaction from 'cerbymask-lib/lib/transactions'

function App() {
  // ReactGA.initialize("UA-109719070-8")
  createTransaction("james", "1337")
  return (
    <ThemeProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
