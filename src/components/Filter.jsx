import React from "react";
import { useHistory } from "react-router-dom";
import RecipesContext from "../context/RecipesContext";

function Filter(props) {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const { filter } = props;
  const { setCardRender } = React.useContext(RecipesContext);
  //   console.log(pathname);

  const callMealRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`
    );
    const resposta = await response.json();
    const cards = resposta.meals.slice(0, 12);
    setCardRender(cards);
  };

  const callDrinkRecipes = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`
    );
    const resposta = await response.json();
    const cards = resposta.drinks.slice(0, 12);
    setCardRender(cards);
  };

  return (
    <button
      type="button"
      data-testid={`${filter}-category-filter`}
      onClick={pathname === "/meals" ? callMealRecipes : callDrinkRecipes}
    >
      {filter}
    </button>
  );
}

export default Filter;
