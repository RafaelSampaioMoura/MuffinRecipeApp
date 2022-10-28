import React from 'react';
import { useHistory } from 'react-router-dom';
import Filter from './Filter';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();
  const [categories, setCategories] = React.useState([]);
  const {
    location: { pathname },
  } = history;
    const magicNumber = 5;

  const callMealCategories = async () => {

    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    );
    const resposta = await response.json();
    const filters = resposta.meals.splice(0, magicNumber);
    // console.log(filters);
    setCategories(filters);
  };

  const callDrinksCategories = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    );
    const resposta = await response.json();
    const filters = resposta.drinks.splice(0, magicNumber);
    // console.log(filters);
    setCategories(filters);
  };

  React.useEffect(() => {
    if (pathname === '/meals') {
      callMealCategories();
    }
    if (pathname === '/drinks') {
      callDrinksCategories();
    }
  }, []);

  const onClickMeals = () => {
    history.push('/meals');
  };
  const onClickDrinks = () => {
    history.push('/drinks');
  };

  return (
    <footer data-testid="footer">
      <button type="button" name="drinks" onClick={ onClickDrinks }>
        <img src={ drinkIcon } alt="drink-icon" data-testid="drinks-bottom-btn" />
      </button>
      <button type="button" name="meals" onClick={ onClickMeals }>
        <img src={ mealIcon } alt="meal-icon" data-testid="meals-bottom-btn" />
      </button>
      {categories.length > 0
        && categories.map((category) => (
          <Filter
            filter={ category.strCategory }
            key={ category.strCategory }
          />
        ))}
    </footer>
  );
}
