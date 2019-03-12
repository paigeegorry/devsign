import React from 'react';

function UserInfo() {
  return (
    <aside>
      <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
      <h3>@username</h3>
      <p>Location, Country</p>
      <a href="/" alt="user website">My website</a>
      <p>Bio. A little bit about user 247.</p>
    </aside>
  );
}

export default UserInfo;
