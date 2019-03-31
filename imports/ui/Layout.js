import React from 'react'
import Bar from './Bar'
import Navigation from './Navigation'
import withAuth from '../hocs/withAuth'

const Layout = props => (
  <div style={{ backgroundColor: '#f1f1f1', maxWidth: 600, margin: '0 auto' }}>
    <Bar />
    <div style={{ paddingBottom: 100 }}>{props.children}</div>
    <Navigation />
  </div>
)

export default Layout
// export default withAuth(Layout)
