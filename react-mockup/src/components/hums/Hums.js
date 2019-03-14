import React from 'react';
import { HumDiv } from './HumStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Hums({ hums }) {
  const humList = hums.map(hum => {
    return (
      <HumDiv key={hum.id}>
        <img src={hum.img} />
        <Link to='/users/{id}'>@{hum.handle}</Link>
        <p>{hum.hum}</p>
      </HumDiv>
    );
  });
  return (
    <section>
      {humList}
    </section>
  );
}

Hums.propTypes = {
  hums: PropTypes.array.isRequired
};

export default Hums;
