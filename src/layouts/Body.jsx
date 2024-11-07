import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Body = () => {
  return (
    <div className="bg-[#fff]">
      <Header />

      <Outlet />

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
