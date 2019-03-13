import React from 'react';
import { TopPostsSection } from './UserStyles';

function TopPosts() {
  return (
    <TopPostsSection>
      <h3>Trending</h3>
      <ul>
        <li>#OhWhatABeautifulMorning</li>
        <li>#SimAlchemy</li>
        <li>#WorstTravelStories</li>
        <li>#RainbowBagelsRBack</li>
        <li>#Banana</li>
      </ul>
    </TopPostsSection>
  );
}

export default TopPosts;
