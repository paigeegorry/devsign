import React from 'react';
import Header from './Header';
import TopPosts from './TopPosts';
import Footer from './Footer';
import Login from './Login';

function Home() {
  return (
    <>
    <Header />
    <main>
      <Login />
      <TopPosts />
    </main>
    <Footer />
    </>
  );
}

export default Home;
