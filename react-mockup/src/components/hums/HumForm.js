import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  h2 {
    font-family: 'Montserrat', sans-serif;
    text-align: center; 
    border-top: 1px solid #E0E0E0;
    padding-top: 25px;
  }
  form {
    display: flex;
    flex-direction: column;
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
      <h2>hum-feed</h2>
      <form>
        <input type="text" name="hum" />
        <button>add new hum</button>
      </form>
    </Div>
  );
}

export default HumForm;
