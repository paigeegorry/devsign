import React from 'react';
import { HumDiv } from './HumStyles';
import PropTypes from 'prop-types';

function Hums({ hums }) {
  const humList = hums.map(hum => {
    return (
      <HumDiv key={hum.id}>
        <p>
          @{hum.handle}
        </p>
        <p>
          {hum.hum}
        </p>
      </HumDiv>
    );
  });
  return (
    <section>
      {humList}
      <HumDiv>
        <img src="react-mockup/src/assets/user-image.png" alt="user icon" />
        <a href="/userprofile">@username</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore eveniet voluptates officia repellat vitae qui accusamus suscipit eum, illum odit exercitationem sint similique reprehenderit incidunt eaque, maxime eligendi dolor?</p>
      </HumDiv>
      <HumDiv>
        <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
        <a href="/userprofile">@username</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore eveniet voluptates officia repellat vitae qui accusamus suscipit eum, illum odit exercitationem sint similique reprehenderit incidunt eaque, maxime eligendi dolor?</p>
      </HumDiv>
      <HumDiv>
        <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
        <a href="/userprofile">@username</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore eveniet voluptates officia repellat vitae qui accusamus suscipit eum, illum odit exercitationem sint similique reprehenderit incidunt eaque, maxime eligendi dolor?</p>
      </HumDiv>
    </section>
  );
}

Hums.propTypes = {
  hums: PropTypes.array.isRequired
};

export default Hums;
