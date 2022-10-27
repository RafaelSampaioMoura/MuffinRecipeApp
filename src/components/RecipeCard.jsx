import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function RecipeCard(props) {
  const history = useHistory();
  const path = history.location.pathname;
  const { card, index } = props;
  return (
    <div>
      {path === '/meals' && (
        <div data-testid={ `${index}-recipe-card` }>
          <h3 data-testid={ `${index}-card-name` }>{ card.strMeal }</h3>
          <img
            data-testid={ `${index}-card-img` }
            src={ card.strMealThumb }
            alt="img-meal"
            width="100"
            height="100"
          />
        </div>
      )}
      {path === '/drinks' && (
        <div data-testid={ `${index}-recipe-card` }>
          <h3 data-testid={ `${index}-card-name` }>{ card.strDrink }</h3>
          <img
            data-testid={ `${index}-card-img` }
            src={ card.strDrinkThumb }
            alt="img-meal"
            width="100"
            height="100"
          />
        </div>
      )}
    </div>
  );
}

RecipeCard.propTypes = {
  card: PropTypes.shape({
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
