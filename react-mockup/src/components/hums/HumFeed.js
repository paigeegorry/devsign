import React from 'react';
import Header from '../app/Header';
import HumForm from './HumForm';
import Footer from '../app/Footer';
import Hums from './Hums';

function HumFeed() {
  return (
    <>
    <Header />
    <main>
      <section>
        <HumForm />
        <Hums />
      </section>
    </main>
    <Footer />
  </>
  );
}

export default HumFeed;
