/* eslint-disable */

import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withProps from 'recompose/withProps';

const Post = ({ title, content, myfunction }) => {

  if (myfunction) {
    myfunction()
  }

  return(
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
};

export default compose(
  // defaultProps({
  //   title: 'I am the default prop',
  //   content: 'content from default props',
  // })
  // withProps({
  //   title: 'I am from withProps',
  //   content: 'content from withProps',
  //   myfunction: () => console.log('action fired')
  // })
)(Post);
