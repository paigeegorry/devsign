import React from 'react';
import Header from './Header';
import HumForm from './HumForm';
import Footer from './Footer';
import Hums from './Hums';

function HumFeed() {
  return (
    <>
    <Header />
    <main>
      <section>
        <h2>Your feed</h2>
        <HumForm />
        <Hums />
      </section>
    </main>
    <Footer />
  </>
  );
}

export default HumFeed;
