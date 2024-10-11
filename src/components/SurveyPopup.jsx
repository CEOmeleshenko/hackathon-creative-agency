import React, { useState } from 'react'
import Survey from './Survey';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

function SurveyPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <p className="text-2xl mt-8">Вы хотите помочь нам стать лучше? Пройдите короткий опрос о нашем сайте и получте первое достижение</p>
      <button className="bg-red-500 text-white px-8 py-4 rounded mt-4" onClick={handleOpen}>Пройти опрос</button>
      <Modal isOpen={isOpen} onClose={handleClose} className="bg-white p-8 rounded-lg shadow-md">
        <Survey onComplete={handleClose}/>
      </Modal>
    </div>
  )
}

export default SurveyPopup