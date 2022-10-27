import PropTypes from 'prop-types';
import React from 'react';

function RecipeCard(props) {
  const { card } = props;
  return <div>{card.strMeal}</div>;
}

RecipeCard.propTypes = {
  card: PropTypes.shape({
    strMeal: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
