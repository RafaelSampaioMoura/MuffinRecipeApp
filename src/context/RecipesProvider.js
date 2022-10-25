import React from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

// const INITIAL_STATE = { nome: 'Xablau', idade: 100 };

function RecipesProvider({ children }) {
//   const [state, setState] = useState(INITIAL_STATE);

  return (
    <RecipesContext.Provider value={ state }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = { children: PropTypes.shape() }.isRequired;

export default RecipesProvider;
