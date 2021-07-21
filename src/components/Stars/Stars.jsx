import React from 'react';
import Star from '../Star/Star';
import PropTypes from 'prop-types';

export default function Stars({ rate }) {
  if (rate > 5 || rate < 1) {
    return null;
  }

  const stars = [];
  for (let i = 0; i < rate; i += 1) {
    stars.push(<Star key={i} />);
  }

  return (
    <>
      {stars}
    </>
  );
}

Stars.defaultProps = { rate: 0 };
Stars.propTypes = { rate: PropTypes.number };