import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <button
          name="good"
          onClick={onLeaveFeedback}
          className={css.feedback__button}
        >
          Good
        </button>
        <button
          name="neutral"
          onClick={onLeaveFeedback}
          className={css.feedback__button}
        >
          Neutral
        </button>
        <button
          name="bad"
          onClick={onLeaveFeedback}
          className={css.feedback__button}
        >
          Bad
        </button>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
