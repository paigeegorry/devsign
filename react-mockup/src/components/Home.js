import React from 'react';
import Header from './app/Header';
import TopPosts from './user/TopPosts';
import Footer from './app/Footer';
import Login from './user/Login';

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
