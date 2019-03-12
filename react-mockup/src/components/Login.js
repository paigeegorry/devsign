import React from 'react';

function Login() {
  return (
    <section>
      <h2>Log-in</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button>Sign-in</button>
    </section>
  );
}

export default Login;
