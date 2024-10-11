import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Survey = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: 'Как вам понравился сайт?',
      options: ['Хорошо', 'Плохо'],
    },
    {
      id: 2,
      question: 'Как вы оцениваете скорость загрузки сайта?',
      options: ['Быстро', 'Медленно'],
    },
    {
      id: 3,
      question: 'Как вы оцениваете дизайн сайта?',
      options: ['Красиво', 'Не красиво'],
    },
  ];

  const handleComplete = () => {
    onComplete();
  };

  const handleAnswer = (answer, questionId) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex justify-center items-center h-1/2">
      {currentStep <= questions.length && (
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl mb-4">{questions[currentStep - 1].question}</h2>
          {questions[currentStep - 1].options.map((option, index) => (
            <button
              key={index}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => handleAnswer(option, questions[currentStep - 1].id)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {currentStep > questions.length && (
        <div className="text-center">
          <img
            src="achievement.png"
            alt="survey finished"
            className="w-1/2 mx-auto"
          />
          <p className="text-xl mb-2">Знаток сайта</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => { handleComplete(); }}
          >
            Завершить опрос
          </button>
        </div>
      )
      }
    </div >
  );
};

export default Survey;