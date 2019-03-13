import React from 'react';
import Header from '../app/Header';
import HumForm from './HumForm';
import Footer from '../app/Footer';
import Hums from './Hums';
import { Heading } from './HumStyles';

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
