import React from 'react';
import { Router, Redirect } from '@reach/router';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Layout from './Layout.js';
import RecordsPage from './pages/RecordsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage.js';

const theme = createMuiTheme({ typography: { useNextVariants: true } });

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Router>
        <LoginPage path="/login" />
        <Redirect from="/" to="records" noThrow />
        <Layout path="/">
          <RecordsPage path="records" />
          <NotFoundPage default />
        </Layout>
      </Router>
    </ThemeProvider>
  </div>
);

export default App;