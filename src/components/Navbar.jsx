import React from 'react'
import AuthPopup from './AuthPopup';
import { userProfile } from '../stores/profile.store';

const Navbar = () => {
  const user = userProfile((state) => state.user);

  return (
    <div className="w-full flex justify-around items-center bg-white py-4 shadow-md">
      <div className="flex items-center">
        <img src="logo.png" className="h-14 mr-2" alt="logo" />
        <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
        <span className="text-red-500">Ваш город: Смоленск</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Режим работы: с 8:30 до 18:00 (Пн-Пт)</span>
        <span>+7 (702) 123-45-67</span>

        {!user ? <AuthPopup /> :

          <div className="w-12 h-12 overflow-hidden rounded-full">
            <img src="https://placehold.co/100x100" className="w-full h-full object-cover" alt={user.fio} />
          </div>

        }

      </div>
    </div>
  )
}

export default Navbar