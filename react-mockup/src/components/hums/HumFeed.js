import React from 'react';
import Header from '../app/Header';
import Hum from '../../containers/Hum';
import Footer from '../app/Footer';
import AllHums from '../../containers/AllHums';
import { Heading } from './HumStyles';

function HumFeed() {
  return (
    <>
    <Header />
    <main>
      <section>
        <Heading>hum-feed</Heading>
        <Hum />
        <AllHums />
      </section>
    </main>
    <Footer />
  </>
  );
}

export default HumFeed;
