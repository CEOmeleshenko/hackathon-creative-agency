import React from 'react'
import { userProfile } from '../stores/profile.store';
import { useNavigate } from 'react-router-dom';
import Survey from '../components/Survey';


function Profile() {
  const user = userProfile((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-4xl mt-10">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src="avatar-m.png" alt="Profile picture of a person with short hair and glasses, smiling and looking to the side" className="w-24 h-24 rounded-full mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">{user.fio}</h2>
              <p className="text-gray-600">Agent</p>
            </div>
          </div>
          <div className="">
            <button className="bg-white border border-orange-500 text-orange-500 px-4 py-2 mx-4 rounded mt-4"
              onClick={() => navigate('/request')}>Создать заявку</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={
                () => {
                  userProfile.getState().setUser(null);
                  navigate('/');
                }
              }>Выйти</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4">Активные заявки</h3>
          <div className="border rounded p-4">
            <p>1. Создание дизайна бренда</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile