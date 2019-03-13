import React from 'react';
import { LoginSection } from './UserStyles';

function Login() {
  return (
    <LoginSection>
      <h2>Log-in</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button>Sign-in</button>
    </LoginSection>
  );
}

export default Login;
