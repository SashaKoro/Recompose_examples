import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import withProps from 'recompose/withProps';
import renderNothing from 'recompose/renderNothing';

export const Post = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
};

const hideComponent = (boolean) => {
  return branch(
    boolean,
    renderNothing            // if first argument true then render second argument
  );
};

export default compose(
  withProps({
    title: 'I am from withProps',
    content: 'content be here, read it all'
  }),
  hideComponent((props) => !props.title),
)(Post);
