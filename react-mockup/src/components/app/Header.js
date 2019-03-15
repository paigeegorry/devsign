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
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </Nav>
      </Div>
      <img src="https://res.cloudinary.com/dkrup6iyl/image/fetch/v1552429847/https://res.cloudinary.com/dkrup6iyl/image/upload/v1552429521/download.png" alt="Hummingbird logo" />
    </Wrapper>
  );
}

export default Header;
