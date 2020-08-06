import React from 'react';
import PropTypes from 'prop-types';

export default function Login({ onSubmit }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };
  return (
    <form onSubmit={handleSubmit} data-testid="loginForm">
      <h3>Login</h3>
      <label>
        Username
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          data-testid="loginForm-username"
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          data-testid="loginForm-password"
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
