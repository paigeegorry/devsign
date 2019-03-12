import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-family: sans-serif;
  font-size: 1.25em;
  border: 1px solid #E0E0E0;
  padding: 10px;
  margin: 10px 0px 10px 0px;
  h3 {
    font-family: 'Montserrat', sans-serif;
    text-align: center; 
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    font-size: .90em;
    margin-top: 5px;
  }
`;

function TopPosts() {
  return (
    <Section>
      <h3>Trending</h3>
      <ul>
        <li>#OhWhatABeautifulMorning</li>
        <li>#SimAlchemy</li>
        <li>#WorstTravelStories</li>
        <li>#RainbowBagelsRBack</li>
        <li>#Banana</li>
      </ul>
    </Section>
  );
}

export default TopPosts;
