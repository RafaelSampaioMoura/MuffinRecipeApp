import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from './RecipeCard';

function SearchBar() {
  const mensagem = 'Sorry, we haven\'t found any recipes for these filters.';
  const first = 'first-letter';
  const history = useHistory();
  const path = history.location.pathname;
  const [cardRender, setCardRender] = React.useState([]);
  const {
    setRadio,
    setApiDrinks,
    setApiMeals,
    search,
    radio,
  } = useContext(RecipesContext);

  const handleChange = ({ target }) => {
    setRadio(target.value);
  };

  const handleRecipeCards = (mealArr) => {
    const maxRecipes = 12;

    if (mealArr.length > maxRecipes) {
      const firstTwelveElements = mealArr.slice(0, maxRecipes);
      setCardRender([...firstTwelveElements]);
    }

    if (mealArr.length < maxRecipes && mealArr.length > 1) {
      const allElements = mealArr.slice();
      setCardRender([...allElements]);
    }
  };

  const firstMaiorQueUm = () => {
    if (radio === first && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const endPoints = {
    endMeals: {
      namePoint: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      ingredientePoint: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
      firstLetterPoint: `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
    },
    endDrinks: {
      namePoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
      ingredientePoint: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`,
      firstLetterPoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`,
    },
  };

  const callIngredientMeal = async () => {
    const response = await fetch(endPoints.endMeals.ingredientePoint);
    const resposta = await response.json();
    if (resposta.meals === null) {
      global.alert(mensagem);
    } else if (resposta.meals.length === 1) {
      history.push(`/meals/${resposta.meals[0].idMeal}`);
    } else {
      handleRecipeCards(resposta.meals);
      setApiMeals(resposta.meals);
    }
  };

  const callNameMeal = async () => {
    const response = await fetch(endPoints.endMeals.namePoint);
    const resposta = await response.json();
    if (resposta.meals === null) {
      global.alert(mensagem);
    } else if (resposta.meals.length === 1) {
      history.push(`/meals/${resposta.meals[0].idMeal}`);
    } else {
      handleRecipeCards(resposta.meals);
      setApiMeals(resposta.meals);
    }
  };

  const callSingleMeal = async () => {
    const response = await fetch(endPoints.endMeals.firstLetterPoint);
    const resposta = await response.json();
    if (resposta.meals === null) {
      global.alert(mensagem);
    } else if (resposta.meals.length === 1) {
      history.push(`/meals/${resposta.meals[0].idMeal}`);
    } else {
      handleRecipeCards(resposta.meals);
      setApiMeals(resposta.meals);
    }
  };

  const apiMeals = async () => {
    if (radio === 'ingredient') {
      callIngredientMeal();
    }
    if (radio === 'name') {
      callNameMeal();
    }
    if (radio === first && search.length === 1) {
      callSingleMeal();
    }
    firstMaiorQueUm();
  };

  const callIngredientDrink = async () => {
    const response = await fetch(endPoints.endDrinks.ingredientePoint);
    const resposta = await response.json();
    if (resposta.drinks === null) {
      global.alert(mensagem);
    } else if (resposta.drinks.length === 1) {
      history.push(`/drinks/${resposta.drinks[0].idDrink}`);
    } else {
      handleRecipeCards(resposta.drinks);
      setApiDrinks(resposta.drinks);
    }
  };

  const callNameDrink = async () => {
    const response = await fetch(endPoints.endDrinks.namePoint);
    const resposta = await response.json();
    if (resposta.drinks === null) {
      global.alert(mensagem);
    } else if (resposta.drinks.length === 1) {
      history.push(`/drinks/${resposta.drinks[0].idDrink}`);
    } else {
      handleRecipeCards(resposta.drinks);
      setApiDrinks(resposta.drinks);
    }
  };

  const callSingleDrink = async () => {
    const response = await fetch(endPoints.endDrinks.firstLetterPoint);
    const resposta = await response.json();
    if (resposta.drinks === null) {
      global.alert(mensagem);
    } else if (resposta.drinks.length === 1) {
      history.push(`/drinks/${resposta.drinks[0].idDrink}`);
    } else {
      handleRecipeCards(resposta.drinks);
      setApiDrinks(resposta.drinks);
    }
  };

  const apiDrinks = async () => {
    if (radio === 'ingredient') {
      callIngredientDrink();
    }
    if (radio === 'name') {
      callNameDrink();
    }
    if (radio === first && search.length === 1) {
      callSingleDrink();
    }
    firstMaiorQueUm();
  };

  const onClickMeals = () => {
    apiMeals();
    // handleRecipeCards(apiMealss);
  };
  const onClickDrinks = () => {
    apiDrinks();
  };

  return (
    <div>
      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          name="escolha"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
        Ingredient
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          name="escolha"
          value="name"
          data-testid="name-search-radio"
          onChange={ handleChange }
        />
        Name
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          name="escolha"
          value="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ handleChange }
        />
        First letter
      </label>
      <button
        type="button"
        name="exec-search-btn"
        data-testid="exec-search-btn"
        onClick={ path === '/meals' ? onClickMeals : onClickDrinks }
      >
        Search
      </button>
      {path === '/meals' && cardRender.length > 0
        ? cardRender.map((card, index) => (
          <RecipeCard card={ card } index={ index } key={ card.idMeal } />
        ))
        : null}
      {path === '/drinks' && cardRender.length > 0
        ? cardRender.map((card, index) => (
          <RecipeCard card={ card } index={ index } key={ card.idDrink } />
        ))
        : null}
    </div>
  );
}

export default SearchBar;
