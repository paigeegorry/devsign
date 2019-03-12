import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  font-family: sans-serif;
  display: flex;
  h1 {
    margin-left: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  img {
    width: 100px;
    height: 100px;
  }`;
  
const Nav = styled.nav`
  display: block;
  li {
    list-style: none;
  }
`;

function Header() {
  return (
    <Wrapper>
      <h1>hummingbird</h1>
      <img src="react-mockup/src/assets/logo.png" alt="Hummingbird logo" />
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hum-feed">HumFeed</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </Nav>
    </Wrapper>
  );
}

export default Header;
