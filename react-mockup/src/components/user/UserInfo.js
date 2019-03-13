import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-family: sans-serif;
  border-top: 1px solid gray;
  margin: 10px 0px;
  img {
    float: left;
    margin-right: 20px;
    border: 1px solid gray;
    border-radius: 50px;
    margin-top: 8px;
    padding: 10px;
  }
  h3 {
    font-family: 'Montserrat', sans-serif; 
    color: purple;
  }
  margin-bottom: 50px;
`;

function UserInfo() {
  return (
    <Section>
      <img src="react-mockup/src/assets/user-image.png" alt="user icon" width="100px" />
      <h3>@username</h3>
      <p>Location, Country</p>
      <p>website: <a href="/" alt="user website">website</a></p>
      <p>Bio. A little bit about user 247.</p>
    </Section>
  );
}

export default UserInfo;
