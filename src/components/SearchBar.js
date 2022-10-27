import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const first = 'first-letter';
  const history = useHistory();
  const path = history.location.pathname;
  const { setRadio,
    setApiDrinks,
    setIdDrinks,
    setApiMeals,
    setIdMeals,
    apiMealss,
    search,
    radio,
  } = useContext(RecipesContext);

  const handleChange = ({ target }) => {
    setRadio(target.value);
  };

  const apiMeals = async () => {
    const namePoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const ingredientePoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    const firstLetterPoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
    if (radio === 'ingredient') {
      const response = await fetch(ingredientePoint);
      const resposta = await response.json();
      if (resposta.meals.length === 1) {
        history.push(`/meals/${resposta.meals[0].idMeal}`);
      }
      setApiMeals(resposta.meals);
      const arrayIds = await resposta.meals.map((elemento) => elemento.idMeal);
      setIdMeals(arrayIds);
      console.log(arrayIds);
    } if (radio === 'name') {
      const response = await fetch(namePoint);
      const resposta = await response.json();
      console.log(resposta.meals[0].idMeal);
      if (resposta.meals.length === 1) {
        history.push(`/meals/${resposta.meals[0].idMeal}`);
      }
      console.log(resposta.meals);
      setApiMeals(resposta.meals);
      const arrayIds = await resposta.meals.map((elemento) => elemento.idMeal);
      setIdMeals(arrayIds);
    } if (radio === first && search.length === 1) {
      const response = await fetch(firstLetterPoint);
      const resposta = await response.json();
      if (resposta.meals.length === 1) {
        history.push(`/meals/${resposta.meals[0].idMeal}`);
      }
      setApiMeals(resposta.meals);
      const arrayIds = await resposta.meals.map((elemento) => elemento.idMeal);
      setIdMeals(arrayIds);
    } if (radio === first && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    console.log('comidas');
  };

  const apiDrinks = async () => {
    const namePoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const ingredientePoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
    const firstLetterPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
    if (radio === 'ingredient') {
      const response = await fetch(ingredientePoint);
      const resposta = await response.json();
      if (resposta.drinks.length === 1) {
        history.push(`/drinks/${resposta.drinks[0].idDrink}`);
      }
      setApiDrinks(resposta.drinks);
      const arrayIds = resposta.drinks.map((elemento) => elemento.idDrink);
      setIdDrinks(arrayIds);
    } if (radio === 'name') {
      const response = await fetch(namePoint);
      const resposta = await response.json();
      if (resposta.drinks.length === 1) {
        history.push(`/drinks/${resposta.drinks[0].idDrink}`);
      }
      setApiDrinks(resposta.drinks);
      const arrayIds = resposta.drinks.map((elemento) => elemento.idDrink);
      setIdDrinks(arrayIds);
    } if (radio === first && search.length === 1) {
      const response = await fetch(firstLetterPoint);
      const resposta = await response.json();
      if (resposta.drinks.length === 1) {
        history.push(`/drinks/${resposta.drinks[0].idDrink}`);
      }
      setApiDrinks(resposta.drinks);
      const arrayIds = resposta.drinks.map((elemento) => elemento.idDrink);
      setIdDrinks(arrayIds);
    } if (radio === first && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    console.log('bebidas');
  };

  const handleRecipeCards = (mealArr) => {
    if (mealArr.length > 12) {
      const firstTwelveElements = mealArr.slice(0, 12);
      setCardRender([...firstTwelveElements]);
    }

    if (mealArr.length < 12 && mealArr.length > 1) {
      const allElements = mealArr.slice();
      setCardRender([...allElements]);
    }
  };

  const onClickMeals = () => {
    apiMeals();
    handleRecipeCards(apiMealss);
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
