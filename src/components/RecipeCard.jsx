import React from "react";

function RecipeCard(props) {
  const { card } = props;
  return <div>{card.strMeal}</div>;
}

export default RecipeCard;
