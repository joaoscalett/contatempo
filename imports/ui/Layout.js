import React from 'react'
import Bar from './Bar'
import Navigation from './Navigation'
import Fixed from './Fixed'
import CurrentRecord from './records/CurrentRecord'

const MARGIN = 12
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
    <div
      style={{
        margin: MARGIN,
        paddingBottom: 68,
      }}
    >
      <div style={{ marginBottom: `${MARGIN}px` }}>
        <CurrentRecord />
      </div>
      {props.children}
    </div>
    <Fixed bottom={0}>
      <Navigation />
    </Fixed>
  </div>
)

export default Layout
