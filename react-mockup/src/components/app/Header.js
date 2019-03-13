import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  font-family: sans-serif;
  display: flex;
  h1 {
    padding: 0;
    margin-bottom: 0;
    margin-left: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  img {
    margin-left: 8px;
    width: 100px;
    height: 100px;
  }`;
  
const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      list-style: none;
    }
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function Header() {
  return (
    <Wrapper>
      <Div>
        <h1>hummingbird</h1>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hum-feed">HumFeed</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
        </Nav>
      </Div>
      <img src="react-mockup/src/assets/logo.png" alt="Hummingbird logo" />
    </Wrapper>
  );
}

export default Header;
