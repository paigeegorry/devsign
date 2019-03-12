import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: sans-serif;
  padding: 10px;
  margin: 5px;
  border: 1px solid #E0E0E0;
  img {
    position: relative;
    float: left;
    top: 0;
    height: 50px;
    width: 50px;
    border: 1px solid black;
    border-radius: 30px;
    padding: 5px;
    margin: 10px;
  }
  a {
    font-weight: bold;
  }
`;

function Hums() {
  return (
    <section>
      <Div>
        <img src="react-mockup/src/assets/user-image.png" alt="user icon" />
        <a href="/userprofile">@username</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore eveniet voluptates officia repellat vitae qui accusamus suscipit eum, illum odit exercitationem sint similique reprehenderit incidunt eaque, maxime eligendi dolor?</p>
      </Div>
      <Div>
        <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
        <a href="/userprofile">@username</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore eveniet voluptates officia repellat vitae qui accusamus suscipit eum, illum odit exercitationem sint similique reprehenderit incidunt eaque, maxime eligendi dolor?</p>
      </Div>
      <Div>
        <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
        <a href="/userprofile">@username</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore eveniet voluptates officia repellat vitae qui accusamus suscipit eum, illum odit exercitationem sint similique reprehenderit incidunt eaque, maxime eligendi dolor?</p>
      </Div>
    </section>
  );
}

export default Hums;
