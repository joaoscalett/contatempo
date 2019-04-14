import React from 'react'
import { Router, Redirect } from '@reach/router'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Layout from './Layout.js'
import HistoryPage from './pages/HistoryPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage.js'

const theme = createMuiTheme({ typography: { useNextVariants: true } })

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Router>
        <LoginPage path="/login" />
        <Redirect from="/" to="/history" noThrow />
        <Layout path="/">
          <HistoryPage path="history" />
          <SettingsPage path="settings" />
          <NotFoundPage default />
        </Layout>
      </Router>
    </ThemeProvider>
  </div>
)

export default App
