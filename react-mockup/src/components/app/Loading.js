import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Loader = styled.div`
  h1 {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    text-align: center;
    color: rgba(0, 0, 0, .3);
    font-size: 5em
  }
  h1:before {
      content: attr(data-text);
      position: absolute;
      overflow: hidden;
      max-width: 7em;
      white-space: nowrap;
      color: #3498db;
      animation: loading 8s linear;
  }
  @keyframes loading {
      0% {
          max-width: 0;
      }
  }
`;

function Loading() {
  return (
    <>
      <Header />
      <Loader>
        <h1 data-text="Loading…">Loading…</h1>
      </Loader>
      <Footer />
    </>
  );
}

export default Loading;
