import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [search, setSearch] = useState('');

  /* const callApi = async () => {
    const endPoint = 'URL';
    const response = await fetch(endPoint);
    const { results } = await response.json();
    console.log(results);
  }; */

  const state = useMemo(() => ({
    email,
    password,
    disabled,
    search,
    setEmail,
    setPassword,
    setDisabled,
    setSearch,
  }), [email, password, disabled, search]);

  return (
    <RecipesContext.Provider value={ state }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = { children: PropTypes.shape() }.isRequired;

export default RecipesProvider;
