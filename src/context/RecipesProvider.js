import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');
  const [apiMealss, setApiMeals] = useState([]);
  const [apiDrinkss, setApiDrinks] = useState([]);
  const [idMeals, setIdMeals] = useState([]);
  const [idDrinks, setIdDrinks] = useState([]);

  const state = useMemo(() => ({
    email,
    password,
    disabled,
    search,
    radio,
    apiMealss,
    apiDrinkss,
    idMeals,
    idDrinks,
    setEmail,
    setPassword,
    setDisabled,
    setSearch,
    setRadio,
    setIdMeals,
    setIdDrinks,
    setApiMeals,
    setApiDrinks,
  }), [email,
    password,
    disabled,
    search,
    radio,
    apiMealss,
    apiDrinkss,
    idMeals,
    idDrinks,
  ]);

  return (
    <RecipesContext.Provider value={ state }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = { children: PropTypes.shape() }.isRequired;

export default RecipesProvider;
