import React from 'react';
import { UserInfoSection } from './UserStyles';
import PropTypes from 'prop-types';

function UserInfo({
  handle,
  profilePicture
}) {
  if(!profilePicture) {
    profilePicture = 'https://res.cloudinary.com/dkrup6iyl/image/fetch/v1552429847/https://res.cloudinary.com/dkrup6iyl/image/upload/v1552429521/download.png';
  }
  
  return (
    <UserInfoSection>
      <img src={profilePicture} alt="user icon" width="100px" />
      <div>
        <h3>{handle}</h3>
        <p>Location, Country</p>
        <p>website: <a href="/" alt="user website">website</a></p>
        <p>Bio. A little bit about user 247.</p>
      </div>
    </UserInfoSection>
  );
}

UserInfo.propTypes = {
  handle: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired
};

export default UserInfo;
