import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Nav, Div } from './AppStyles';

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
