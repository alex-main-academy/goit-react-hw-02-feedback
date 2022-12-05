import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </>
    );
  }
}

export default Section;
