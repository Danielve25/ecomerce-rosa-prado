import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="w-full max-w-full mx-auto px-6 pb-10">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
