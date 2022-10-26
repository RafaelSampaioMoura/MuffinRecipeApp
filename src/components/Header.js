import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header() {
  const { search, setSearch } = useContext(RecipesContext);

  const history = useHistory();
  const path = history.location.pathname;

  const arrayPerfil = ['/meals',
    '/drinks',
    '/profile',
    '/done-recipes',
    '/favorite-recipes'];
  const arrayPesquisa = ['/meals', '/drinks'];

  const [title, setTitle] = useState('');
  const [btn, setBtn] = useState(false);

  const pathTitle = () => {
    if (path === '/meals') {
      setTitle('Meals');
    } if (path === '/drinks') {
      setTitle('Drinks');
    } if (path === '/profile') {
      setTitle('Profile');
    } if (path === '/done-recipes') {
      setTitle('Done Recipes');
    } if (path === '/favorite-recipes') {
      setTitle('Favorite Recipes');
    }
  };

  useEffect(() => {
    pathTitle();
  }, []);

  const onClickProfile = () => {
    history.push('/profile');
  };
  const onClickPesquisa = () => {
    if (btn === false) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  const onChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <header>
      <h1 data-testid="page-title">{title}</h1>
      {arrayPerfil.includes(history.location.pathname) && (
        <button
          type="button"
          name="profile-top-btn"
          onClick={ onClickProfile }
        >
          <img src={ profileIcon } alt="profile-icon" data-testid="profile-top-btn" />
        </button>
      )}
      {arrayPesquisa.includes(history.location.pathname) && (
        <>
          <SearchBar />
          <button
            type="button"
            name="search-top-btn"
            onClick={ onClickPesquisa }
          >
            <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
          </button>
        </>
      )}
      {btn && (
        <input
          type="text"
          name="search-input"
          data-testid="search-input"
          onChange={ onChange }
          value={ search }
        />
      )}
    </header>
  );
}
