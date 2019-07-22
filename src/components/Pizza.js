import React from 'react';
import PropTypes from 'prop-types';

export default function Pizza({ ingredients }) {
  return (
    <>
      <h3>Pizza</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}

Pizza.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
