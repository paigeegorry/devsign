import React from 'react';
import { UserInfoSection } from './UserStyles';

function UserInfo() {
  return (
    <UserInfoSection>
      <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
      <div>
        <h3>@username</h3>
        <p>Location, Country</p>
        <p>website: <a href="/" alt="user website">website</a></p>
        <p>Bio. A little bit about user 247.</p>
      </div>
    </UserInfoSection>
  );
}

export default UserInfo;
