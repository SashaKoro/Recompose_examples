import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import withProps from 'recompose/withProps';

export const Post = ({ title, content, footer }) => {
  return(
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
};

export default compose(
  // defaultProps({
  //   title: 'I am the default prop',
  //   content: 'content from default props',
  //   footer: '-------------'
  // }),
  // withProps({
  //   title: 'I am from withProps',
  //   content: 'content from withProps'
  // })
)(Post);
