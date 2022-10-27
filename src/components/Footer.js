import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();

  const onClickMeals = () => {
    history.push('/meals');
  };
  const onClickDrinks = () => {
    history.push('/drinks');
  };

  return (
    <footer data-testid="footer">
      <button
        type="button"
        name="drinks"
        onClick={ onClickDrinks }
      >
        <img src={ drinkIcon } alt="drink-icon" data-testid="drinks-bottom-btn" />
      </button>
      <button
        type="button"
        name="meals"
        onClick={ onClickMeals }
      >
        <img src={ mealIcon } alt="meal-icon" data-testid="meals-bottom-btn" />
      </button>
    </footer>
  );
}
