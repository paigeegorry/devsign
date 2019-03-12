import React from 'react';
import UserInfo from './UserInfo';
import HumsByUser from './HumsByUser';
import Header from './Header';
import Footer from './Footer';

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
