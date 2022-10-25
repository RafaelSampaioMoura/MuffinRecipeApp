// // HELPERS DE SUGESTÃO:

// // TELA DE LOGIN:
// // Validação de email e senha:

// handleChange = ({ target: { name, value } }) => (
//   name === 'email' ? email(value) : password(value));

// emailValidation = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
// passwordValidation = (password) => {
//   const MIN_LENGTH_PASSWORD = 7;
//   return password.length >= MIN_LENGTH_PASSWORD;
// };

// loginValidation = () => {
//   const allValidation = emailValidation(email) && passwordValidation(password);
//   if (allValidation) disabled(false);
//   else disabled(true);
// };

// // CHAMADA PADRÃO API:

// callApi = async () => {
//   const endPoint = 'URL';
//   const response = await fetch(endPoint);
//   const { results } = await response.json();
// // IMPLEMENTAR FILTER OU MAP CONFORME USABILIDADE NECESSÁRIA
//   return (...)
// };
