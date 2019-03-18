import React from 'react';
import { HumDiv } from './HumStyles';
import PropTypes from 'prop-types';

function Hums({ hums }) {
  const humList = hums.map((hum, i) => {
    return (
      <HumDiv key={i}>
        <img src={hum.user.picture} />
        <span>@{hum.user.nickname}</span>
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
