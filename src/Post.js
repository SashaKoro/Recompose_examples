import React from 'react';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import renameProp from 'recompose/renameProp';
import mapProps from 'recompose/mapProps';
import withProps from 'recompose/withProps';
import defaultProps from 'recompose/defaultProps';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import renderNothing from 'recompose/renderNothing';
import branch from 'recompose/branch';
import Container from './Container';

export const Post = ({ title, content, begin, end, blah, value }) => {
  return (
    <div>
      <p>Post Component</p>
      <h3>{title}</h3>
      <div>{content}</div>
      <h6>{begin}</h6>
      <div>-------</div>
      <h6>{end}</h6>
      <input type="text" onChange={blah} value={value} />
    </div>
  );
};

const hideComponent = (data) => {
  return branch(
    data,
    renderNothing
  );
};

export default compose(
  Container,
  withProps({
    title: 'I am from withProps',
    content: 'content be here, read it all'
  }),
  renameProp('begin', 'end'),
  setDisplayName('my name is...'),
  // hideComponent((props) => !props.end),
  withState('value', 'updateValue', 'hi'),
  withHandlers({
    blah: ({ updateValue }) => () => updateValue(n => n + 32)
  })
)(Post);
