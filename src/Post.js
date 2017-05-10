import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
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
  hideComponent((props) => !props.toggle),
)(Post);
