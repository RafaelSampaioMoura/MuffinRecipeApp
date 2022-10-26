import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const first = 'first-letter';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');
  const [apiMealss, setApiMeals] = useState({});
  const [apiDrinkss, setApiDrinks] = useState({});

  const apiMeals = useCallback(async () => {
    const namePoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const ingredientePoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    const firstLetterPoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
    if (radio === 'ingredient') {
      const response = await fetch(ingredientePoint);
      const resposta = await response.json();
      setApiMeals(resposta.meals);
    } if (radio === 'name') {
      const response = await fetch(namePoint);
      const resposta = await response.json();
      setApiMeals(resposta.meals);
    } if (radio === first && search.length === 1) {
      const response = await fetch(firstLetterPoint);
      const resposta = await response.json();
      setApiMeals(resposta.meals);
    } if (radio === first && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    console.log('comidas');
  }, [radio, search]);

  const apiDrinks = useCallback(async () => {
    const namePoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const ingredientePoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
    const firstLetterPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
    if (radio === 'ingredient') {
      const response = await fetch(ingredientePoint);
      const resposta = await response.json();
      console.log(resposta);
      setApiDrinks(resposta.drinks);
    } if (radio === 'name') {
      const response = await fetch(namePoint);
      const resposta = await response.json();
      setApiDrinks(resposta.drinks);
    } if (radio === first && search.length === 1) {
      const response = await fetch(firstLetterPoint);
      const resposta = await response.json();
      setApiDrinks(resposta.drinks);
    } if (radio === first && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    console.log('bebidas');
  }, [radio, search]);

  const state = useMemo(() => ({
    email,
    password,
    disabled,
    search,
    radio,
    apiMealss,
    apiDrinkss,
    apiDrinks,
    setEmail,
    setPassword,
    setDisabled,
    setSearch,
    apiMeals,
    setRadio,
  }), [email,
    password,
    disabled,
    search,
    radio,
    apiMealss,
    apiDrinkss,
    apiMeals,
    apiDrinks,
  ]);

  return (
    <RecipesContext.Provider value={ state }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = { children: PropTypes.shape() }.isRequired;

export default RecipesProvider;
