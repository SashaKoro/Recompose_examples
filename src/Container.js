import React, { Component } from 'react';
import WrappedPost from './Post';

class Container extends Component {
  render() {
    return (
      <WrappedPost
        title="Containers title"
        content='content from Container'
      />
    );
  }
}

export default Container;
