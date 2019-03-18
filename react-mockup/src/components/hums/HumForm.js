import React from 'react';
import { FormDiv } from './HumStyles';
import PropTypes from 'prop-types';

function HumForm({
  onSubmit,
  onChange,
  hum
}) {
  return (
    <FormDiv onSubmit={onSubmit}>
      <form>
        <label htmlFor="hum"><p>post a new hum</p>
          <input type="text" name="hum" value={hum} onChange={onChange} />
        </label>
        <button>add new hum</button>
      </form>
    </FormDiv>
  );
}

HumForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  hum: PropTypes.string.isRequired
};

export default HumForm;
