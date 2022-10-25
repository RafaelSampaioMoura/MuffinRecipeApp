import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

function RecipesRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route exact path="/meals" component={ Meals } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/meals/:id" component={ receitaComida } />
      <Route exact path="/drinks/:id" component={ receitaBebida } />
      <Route exact path="/meals/:id/in-progress" component={ pComida } />
      <Route exact path="/drinks/:id/in-progress" component={ pBebi } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ done } />
      <Route exact path="/favorite-recipes" component={ Favorite } /> */}
    </Switch>
  );
}

export default RecipesRoutes;
