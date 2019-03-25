import React from 'react'
import Bar from './Bar'
import withAuth from '../hocs/withAuth'

const Layout = props => (
  <div style={{ backgroundColor: '#f5f5f5', maxWidth: 600, margin: '0 auto' }}>
    <Bar />
    <div>{props.children}</div>
  </div>
)

export default Layout
// export default withAuth(Layout)
