import React from 'react';
import Cart from './Cart';
import AuthButtons from './AuthButtons';
import UserDropdown from './UserDropdown';

const Navbar = () => {
  return (
    <header>
      <AuthButtons />
      <nav className="navbar bg-base-100 shadow-sm lg:rounded-box w-full">
        <div className="navbar-start">
          <a href="" className="btn btn-ghost text-xl">
            ecomerce rosa prado
          </a>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn btn-primary" href="">
            Dashboard
          </a>
          <Cart />
          <UserDropdown />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
