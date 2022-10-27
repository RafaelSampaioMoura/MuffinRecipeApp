import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import Profile from '../pages/Profile';
import Done from '../pages/Done';
import Favorite from '../pages/Favorite';
import RecipesMeals from '../pages/RecipesMeals';
import RecipesDrinks from '../pages/RecipesDrinks';

function RecipesRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/meals" component={ Meals } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/meals/:id" component={ RecipesMeals } />
      <Route exact path="/drinks/:id" component={ RecipesDrinks } />
      {/*  <Route exact path="/meals/:id/in-progress" component={ pComida } />
      <Route exact path="/drinks/:id/in-progress" component={ pBebi } /> */}
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ Done } />
      <Route exact path="/favorite-recipes" component={ Favorite } />
    </Switch>
  );
}

export default RecipesRoutes;
