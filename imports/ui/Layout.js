import React from 'react';
import withAuth from '../hocs/withAuth';

export default withAuth(props =>
  <div>
    <h2>AppBar</h2>
    {props.children}
  </div>
)

