import React, { Component } from 'react';
import Post from './Post';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      title: "Containers title",
      content: "content from Container"
    }
  }
  render() {
    return (
      <Post
        title={ this.state.title }
        content={ this.state.content }
      />
    );
  }
}

export default Container;
