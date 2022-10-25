// import { useContext } from 'react';
// import RecipesContext from '../context/RecipesContext';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            name="email-input"
            data-testid="email-input"
            onChange={ () => { } }
            value={ email }
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password-input"
            data-testid="password-input"
            onChange={ () => { } }
            value={ password }
            placeholder="Digite sua senha"
          />
        </label>
        <button
          type="submit"
          name="login-submit-btn"
          data-testid="login-submit-btn"
          onClick={ () => { } }
          disabled={ () => { } }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
