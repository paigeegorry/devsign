import React from 'react';
import User from '../../containers/User';
import HumsByUser from './HumsByUser';
import Header from '../app/Header';
import Footer from '../app/Footer';
import HumForm from '../hums/HumForm';

function UserDetail() {
  return (
    <>
    <Header />
    <main>
      <User />
      <HumForm />
      <HumsByUser />
    </main>
    <Footer />
    </>
  );
}

export default UserDetail;
