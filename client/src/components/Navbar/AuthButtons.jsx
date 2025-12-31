import React from 'react';

const AuthButtons = () => {
  return (
    <div className="py-4 flex justify-center items-center gap-4">
      <button className="btn btn-primary">Iniciar sesión</button>
      <div className="hidden lg:block">|</div>
      <button className="btn btn-outline">Registrarse</button>
    </div>
  );
};

export default AuthButtons;
