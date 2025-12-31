import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(false);
  const onsubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="mt-8 flex flex-col gap-4 lg:gap-6 max-w-125 mx-auto"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div>
        <input
          {...register('email', {
            required: 'El correo electrónico es obligatorio',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'El correo electrónico no es válido',
            },
            minLength: {
              value: 6,
              message: 'El correo electrónico debe tener al menos 6 caracteres',
            },
            maxLength: {
              value: 254,
              message:
                'El correo electrónico no debe exceder los 254 caracteres',
            },
          })}
          className={`p-2 outline-2 rounded border focus:outline-primary w-full ${
            errors.email
              ? 'border-red-500 outline-red-500 focus:outline-red-500'
              : ''
          }`}
          autoComplete="email"
          type="email"
          name="email"
          id=""
          placeholder="Correo electrónico"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="relative">
        <input
          {...register('password', {
            required: 'La contraseña debe tener entre 6 y 20 caracteres',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
            maxLength: {
              value: 20,
              message: 'La contraseña no debe exceder los 20 caracteres',
            },
          })}
          className={`p-2 outline-2 rounded border focus:outline-primary w-full ${
            errors.password
              ? 'border-red-500 outline-red-500 focus:outline-red-500'
              : ''
          }`}
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          autoComplete="current"
        />
        <button
          className="cursor-pointer absolute right-4 top-5 transform -translate-y-1/2 text-gray-600"
          type="button"
          aria-label={
            showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'
          }
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash size={23} /> : <FaEye size={23} />}
        </button>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <button className="btn btn-primary w-full mt-4 lg:mt-6" type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
