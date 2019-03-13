import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: sans-serif;
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    input {
      padding: 10px;
      border: 1px solid #808080;
      margin: 5px;
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    }
    input:focus {
      border: 1px solid rgba(81, 203, 238, 1);
    }
    button {
      border: 1px solid rgba(81, 203, 238);
      width: 150px;
      border-radius: 25px;
      font-weight: bold;
      text-transform: lowercase;
      padding: 8px;
      align-self: center;
      margin-bottom: 10px;
    }
  }
`;

function HumForm() {
  return (
    <Div>
      <form>
        <label htmlFor="hum"><p>post a new hum</p>
          <input type="text" name="hum" />
        </label>
        <button>add new hum</button>
      </form>
    </Div>
  );
}

export default HumForm;
