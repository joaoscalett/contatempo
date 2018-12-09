import React from 'react';
import { Router, Redirect } from '@reach/router';
import Layout from './Layout.js';
import NowPage from './pages/NowPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage.js';

const App = () => (
  <div>
    <Router>
      <LoginPage path="/login" />
      <Redirect from="/" to="now" noThrow />
      <Layout path="/">
        <NowPage path="now" />
        <NotFoundPage default />
      </Layout>
    </Router>
  </div>
);

export default App;
