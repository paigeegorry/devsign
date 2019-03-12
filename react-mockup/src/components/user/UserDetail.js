import React from 'react';
import UserInfo from './UserInfo';
import HumsByUser from '../hums/HumsByUser';
import Header from '../app/Header';
import Footer from '../app/Footer';

function UserDetail() {
  return (
    <>
    <Header />
    <main>
      <UserInfo />
      <HumsByUser />
    </main>
    <Footer />
    </>
  );
}

export default UserDetail;
