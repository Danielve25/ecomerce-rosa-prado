import React from 'react';
import { Link } from 'react-router';

const AuthButtons = () => {
  return (
    <div className="py-4 flex justify-center items-center gap-4">
      <Link className="btn btn-primary" to="/login">
        Iniciar sesión
      </Link>
      <div className="hidden lg:block">|</div>
      <Link className="btn btn-outline" to="/register">
        Registrarse
      </Link>
    </div>
  );
};

export default AuthButtons;
