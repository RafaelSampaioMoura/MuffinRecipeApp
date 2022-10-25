import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div>
      {/* OS BOTÕES NÃO APARECEM EM TODAS AS PÁGINAS. DEVE SER CRIADA A LÓGICA PARA O SEU DEVIDO REDIRECIONAMENTO */}
      <button
        type="button"
        name="search-top-btn"
        onClick={ () => { } }
      >
        <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
      </button>
      <button
        type="button"
        name="profile-top-btn"
        onClick={ () => { } }
      >
        <img src={ profileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      </button>
      {/* O VALOR DO HEADER ABAIXO DEVE VARIAR CONFORME A PÁGINA REDIRECIONADA. */}
      <h1 data-testid="page-title">Header</h1>
      <input
        type="text"
        name="search-input"
        data-testid="search-input"
        onChange={ () => { } }
        value={ search }
      />
      <SearchBar />
    </div>
  );
}

export default Header;
