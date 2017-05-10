/* eslint ignore */
import React from 'react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

export const Post = ({ myFunction, status }) => {
  return (
    <div>
      <input type="button" onClick={ myFunction } value={ status } />
    </div>
  );
};

export default compose(
  withState('status', 'updateValue', 'login'),
  withProps(({ updateValue }) => ({
    myFunction: () => updateValue(e => e === 'login' ? 'logout' : 'login')
  }))
  // withHandlers({
  //   myFunction: ({ updateValue }) => () => updateValue(e => e === 'login' ? 'logout' : 'login')
  // })
)(Post);
