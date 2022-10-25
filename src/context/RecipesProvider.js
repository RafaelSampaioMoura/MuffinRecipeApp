import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const state = useMemo(() => ({
    email,
    password,
    disabled,
    setEmail,
    setPassword,
    setDisabled,
  }), [email, password, disabled]);

  return (
    <RecipesContext.Provider value={ state }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = { children: PropTypes.shape() }.isRequired;

export default RecipesProvider;
