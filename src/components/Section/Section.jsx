import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
