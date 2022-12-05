import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const totalCount = total();
    const positivePercent = positivePercentage();

    return (
      <>
        <p>Statistics:</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalCount}</p>
        <p>
          Positive feedback: {positivePercent ? positivePercent.toFixed(0) : 0}%
        </p>
      </>
    );
  }
}

export default Statistics;
