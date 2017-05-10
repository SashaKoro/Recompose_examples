import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import withProps from 'recompose/withProps';
import renderNothing from 'recompose/renderNothing';

export const Post = ({ content }) => {
  return (
    <div>
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
    toggle: true,
    content: 'content be here, read it all'
  }),
  hideComponent((props) => !props.toggle),
)(Post);
