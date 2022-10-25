import { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function Login(props) {
  const { email,
    password,
    disabled,
    setEmail,
    setPassword,
    setDisabled,
  } = useContext(RecipesContext);

  const loginValidation = () => {
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const MIN_LENGTH_PASSWORD = 6;
    if (emailValidation && password.length >= MIN_LENGTH_PASSWORD) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
    loginValidation();
  };

  const onClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    const { history } = props;
    history.push('/meals');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ handleChange }
            value={ email }
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ handleChange }
            value={ password }
            placeholder="Digite sua senha"
          />
        </label>
        <button
          type="button"
          name="login-submit-btn"
          data-testid="login-submit-btn"
          onClick={ onClick }
          disabled={ disabled }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
