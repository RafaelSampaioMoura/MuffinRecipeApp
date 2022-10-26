import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const history = useHistory();
  const path = history.location.pathname;
  const { setRadio, apiMeals, apiDrinks } = useContext(RecipesContext);

  const handleChange = ({ target }) => {
    setRadio(target.value);
  };

  const onClickMeals = () => {
    apiMeals();
  };
  const onClickDrinks = () => {
    apiDrinks();
  };

  return (
    <div>
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          name="escolha"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          name="escolha"
          value="name"
          data-testid="name-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First letter
        <input
          type="radio"
          name="escolha"
          value="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        name="exec-search-btn"
        data-testid="exec-search-btn"
        onClick={ path === '/meals' ? onClickMeals : onClickDrinks }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
