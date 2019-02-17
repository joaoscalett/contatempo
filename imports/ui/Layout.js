import React from 'react';
import Bar from './Bar';
import withAuth from '../hocs/withAuth';

const Layout = props =>
  <div>
    <Bar />
    <div>
      {props.children}
    </div>
  </div>

export default Layout
// export default withAuth(Layout)
