import React, { Component } from 'react';
import WrappedPost from './Post';

class Container extends Component {
  constructor() {
    super();

    this.state = {
      toggle: true,
      title: "Containers title",
      content: "content from Container"
    }
  }
  render() {
    return (
      <WrappedPost
        toggle={ this.state.toggle }
        title={ this.state.title }
        content={ this.state.content }
      />
    );
  }
}

export default Container;
