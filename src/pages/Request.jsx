import React, { useEffect, useState } from 'react'
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Request() {
  const navigation = useNavigate();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const [id, setId] = useState('');
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getServices();
        console.log(response);
        setOptions(response);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {}
      const response = await api.sendOrder(data);
      navigation('/profile');
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Создание заявки</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 appearance-none"
            >
              {options?.map((option) => (
                <option key={option.id} value={option.id} className="py-2">
                  {option.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <textarea placeholder="Описание заявки" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Отправить заявку</button>
        </form>
      </div>
    </div>
  )
}

export default Request