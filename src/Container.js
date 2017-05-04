import React, { Component } from 'react';
import Post from './Post';

class Container extends Component {
  render() {
    return (
      <Post
        title="Containers title"
        content='content from Container'
      />
    );
  }
}

export default Container;
