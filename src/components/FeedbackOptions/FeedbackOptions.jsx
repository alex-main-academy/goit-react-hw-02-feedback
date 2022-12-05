import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <button name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </>
    );
  }
}

export default FeedbackOptions;
