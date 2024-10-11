import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(name, email, password);
      setUser(response)
      navigate('/profile');
      handleClose();
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
        <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
        <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
          <input type="name" placeholder="Имя" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Придумайте пароль" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Повторите пароль" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Регистрация</button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="text-center text-sm text-gray-500">
          Ещё нет аккаунта? <Link to={'/register'} className="mr-4 text-blue-500">Зарегестрироваться</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;