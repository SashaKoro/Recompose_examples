/* eslint-disable */

import React from 'react';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import renameProp from 'recompose/renameProp';

export const Post = ({ title, content, footer }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
};

export default compose(
  // setDisplayName('WrappedPost'),
  // renameProp('title', 'footer')
)(Post);
