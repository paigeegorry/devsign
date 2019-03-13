import React from 'react';
import UserInfo from './UserInfo';
import HumsByUser from './HumsByUser';
import Header from '../app/Header';
import Footer from '../app/Footer';
import HumForm from '../hums/HumForm';

function UserDetail() {
  return (
    <>
    <Header />
    <main>
      <UserInfo />
      <HumForm />
      <HumsByUser />
    </main>
    <Footer />
    </>
  );
}

export default UserDetail;
