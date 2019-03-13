import React from 'react';
import { FormDiv } from './HumStyles';

function HumForm() {
  return (
    <FormDiv>
      <form>
        <label htmlFor="hum"><p>post a new hum</p>
          <input type="text" name="hum" />
        </label>
        <button>add new hum</button>
      </form>
    </FormDiv>
  );
}

export default HumForm;
