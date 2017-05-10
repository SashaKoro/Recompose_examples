import React, { Component } from 'react';
import WrappedPost from './Post';

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
      <WrappedPost
        title={ this.state.title }
        content={ this.state.content }
      />
    );
  }
}

export default Container;
