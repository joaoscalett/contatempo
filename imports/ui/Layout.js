import React from 'react'
import Bar from './Bar'
import Navigation from './Navigation'

const Layout = props => (
  <div
    style={{
      minHeight: '95vh',
      backgroundColor: '#f1f1f1',
      maxWidth: 600,
      margin: '0 auto',
    }}
  >
    <Bar />
    <div style={{ margin: '0.75rem', paddingBottom: 100 }}>
      {props.children}
    </div>
    <Navigation />
  </div>
)

export default Layout
