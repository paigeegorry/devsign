import React from 'react';
import PropTypes from 'prop-types';
import { TopPostsSection } from './UserStyles';

function TopPosts({
  quotes
}) {
  const quotesList = quotes.map((quote, i) => {
    return (
      <li key={i}>{quote.quote}</li>
    );
  });
  return (
    <TopPostsSection>
      <h3>Trending</h3>
      <ul>
        {quotesList}
      </ul>
    </TopPostsSection>
  );
}

TopPosts.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default TopPosts;
