import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  background: #F5F5F5;
`;

function Footer() {
  return (
    <Foot>
      <p>
        © Hummingbird, 2019
      </p>
    </Foot>
  );
}

export default Footer;
