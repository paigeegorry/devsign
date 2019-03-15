import React from 'react';
import Header from './app/Header';
import Trending from '../containers/Trending';
import Footer from './app/Footer';

function Home() {
  return (
    <>
    <Header />
    <main>
      <Trending />
    </main>
    <Footer />
    </>
  );
}

export default Home;
