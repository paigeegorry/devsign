import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-family: sans-serif;  
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E0E0E0;
  padding-bottom: 10px;
  margin-top: 15px;
  h2 {
    font-family: 'Montserrat', sans-serif; 
  }
  input {
    border: 1px solid #E0E0E0;
    margin: 5px;
  }
  button {
    border: 1px solid #E0E0E0;
    padding: 8px;
    border-radius: 25px;
    margin-top: 5px;
  }
`;

function Login() {
  return (
    <Section>
      <h2>Log-in</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button>Sign-in</button>
    </Section>
  );
}

export default Login;
