import React, { Component } from 'react';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

const Container = (Inner) => {
  return class extends Component {
      render() {
        return(
          <Inner
            title="From Parent"
            begin='from the HOC'
          />
        )
      }
    }
};

export default compose(
  setDisplayName('Container'),
  Container
);
