import React from 'react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';

export const Post = ({ myFunction }) => {
  return (
    <div>
      <input type="checkbox" onClick={ myFunction } />
    </div>
  );
};

export default compose(
  withState('value', 'updateValue'),
  withProps(({ updateValue }) => ({
    myFunction: () => updateValue(n => {
      console.log('action dispatched!!!!');
    })
  }))
  // withHandlers({
  //   myFunction: ({ updateValue }) => () => updateValue(e => {
  //     console.log('action dispatched!');
  //   })
  // })
)(Post);
