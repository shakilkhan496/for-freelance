import React from 'react';
import '../../styles/components/avis/rating.css'

const Rating = ({ score, onScoreChange }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= score ? 'filled' : ''}
        onClick={() => onScoreChange(i)}
      >
        ★
      </span>
    );
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
