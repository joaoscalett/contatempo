import React from 'react';
import Bar from './Bar';
import withAuth from '../hocs/withAuth';

export default withAuth(props =>
  <div>
    <Bar />
    {props.children}
  </div>
)

