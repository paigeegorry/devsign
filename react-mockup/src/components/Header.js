import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="react-mockup/src/assets/logo.png" alt="Hummingbird logo" />
      <nav>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/hum-feed">HumFeed</Link></p>
        <p><Link to="/user">Example User</Link></p>
      </nav>
    </header>
  );
}

export default Header;
