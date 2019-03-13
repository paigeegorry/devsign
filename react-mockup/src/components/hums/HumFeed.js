import React from 'react';
import Header from '../app/Header';
import HumForm from './HumForm';
import Footer from '../app/Footer';
import Hums from './Hums';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  text-align: center; 
  border-top: 1px solid #E0E0E0;
  padding-top: 25px;
`;

function HumFeed() {
  return (
    <>
    <Header />
    <main>
      <section>
        <Heading>hum-feed</Heading>
        <HumForm />
        <Hums />
      </section>
    </main>
    <Footer />
  </>
  );
}

export default HumFeed;
