import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <>
        {Object.keys(options).map(item => {
          return (
            <button
              name={item}
              onClick={onLeaveFeedback}
              className={css.feedback__button}
              key={nanoid()}
            >
              {item}
            </button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default FeedbackOptions;
