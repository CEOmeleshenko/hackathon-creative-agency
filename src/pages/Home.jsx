import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Креативное агентство Design Dynasty</h1>
          <p className="mb-8">Обойдитесь без лишних затрат</p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full mb-4">ОСТАВИТЬ ЗАЯВКУ</button>
          <p>* Ваша заявка не является публичной офертой</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Любой дизайн</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 p-8 flex flex-col items-center">
              <img src="sec1.png" alt="uiux" className="h-48 mb-4" />
              UI/UX
            </div>
            <div className="bg-gray-200 p-8 flex flex-col items-center">
              <img src="sec2.png" alt="illustrations" className="h-48 mb-4" />
              Иллюстрации
            </div>
            <div className="bg-gray-200 p-8 flex flex-col items-center">
              <img src="sec3.png" alt="brand design" className="h-48 mb-4" />
              Дизайн бренда
            </div>
            <div className="bg-gray-200 p-8 flex flex-col items-center">
              <img src="sec4.png" alt="product images" className="h-48 mb-4" />
              Карточки товара
            </div>
            <div className="bg-gray-200 p-8 flex flex-col items-center">
              <img src="sec5.png" alt="logos" className="h-48 mb-4" />
              Логотипы
            </div>
          </div>
          <p className="mt-8">Не нашли услугу в списке, или остались вопросы? Свяжитесь с менеджером по телефону +7 (778) 905-12-44 или</p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full mt-4">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </section>
      <section className="bg-yellow-300 py-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Заказать бесплатную консультацию</h2>
            <p className="mb-8">Консультация бесплатная при условии заказа услуг.</p>
            <button className="bg-red-500 text-white px-8 py-4 rounded-full">Заказать услугу</button>
          </div>
          <div className="w-1/2">
            <img src="consultation.png" alt="Мастер и стиральная машина" />
          </div>
        </div>
      </section>
      <section className="bg-yellow-300 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Лучшие цены по веб-дизайну</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Анимация и видеографика</h3>
              <p className="mb-4">Мы создаем динамичные анимации и видеографику, которые эффективно передают ваш бренд и идеи, привлекая и удерживая внимание вашей аудитории.




</p>
              <span className="text-red-500">от 500 рублей</span>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">UI/UX дизайн</h3>
              <p className="mb-4">Дизайны, которые улучшают пользовательский опыт и помогают вашему бизнесу выделиться на рынке</p>
              <span className="text-red-500">от 600 рублей</span>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Логотип и фирменный стиль</h3>
              <p className="mb-4">Создание уникальных решений для вашего бизнеса</p>
              <span className="text-red-500">от 500 рублей</span>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Редизайн сайта</h3>
              <p className="mb-4">Обновление прежнего устаревшего дизайна сайта или создание нового для привлечения посетителей</p>
              <span className="text-red-500">от 10.000 рублей</span>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Дизайг сайта-каталога</h3>
              <p className="mb-4">Экономичный, быстрый, продающий инструмент для вашего бизнеса. Наполнение карточками товаров подробным описанием и ценами</p>
              <span className="text-red-500">от 12.000 рублей</span>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Сайт онлайн школы</h3>
              <p className="mb-4">Удобная площадка для привлечения и обучения студентов</p>
              <span className="text-red-500">от 30.000 рублей</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Схема работы</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-yellow-100 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">1 ШАГ</h3>
              <p>Консультация</p>
            </div>
            <div className="bg-yellow-100 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">2 ШАГ</h3>
              <p>Анализ</p>
            </div>
            <div className="bg-yellow-100 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">3 ШАГ</h3>
              <p>Разработка Концепции</p>
            </div>
            <div className="bg-yellow-100 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">4 ШАГ</h3>
              <p>Доработка и Утверждение</p>
            </div>
            <div className="bg-yellow-100 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">5 ШАГ</h3>
              <p>Разработка финального дизайна</p>
            </div>
            <div className="bg-yellow-100 p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">6 ШАГ</h3>
              <p>Окончательный дизайн</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-yellow-300 py-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Получите скидку 15% прямо сейчас!</h2>
            <p className="mb-8">Вы получите скидку 15% на все виды ремонта при условии заказа через наш сайт. Скидка не суммируется с другими акциями и предложениями.</p>
            <button className="bg-red-500 text-white px-8 py-4 rounded-full">Получить скидку 15%</button>
          </div>
          <div className="w-1/2">
            <img src="https://placehold.co/400x400" alt="Мастер и стиральная машина" />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Отзывы</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-8 shadow-md">
              <img src="https://placehold.co/100x100" alt="Константин" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Константин</h3>
              <p>Сделали все быстро и качественно. Очень доволен результатом!</p>
            </div>
            <div className="bg-gray-100 p-8 shadow-md">
              <img src="https://placehold.co/100x100" alt="Анна" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Анна</h3>
              <p>Очень благодарна за оперативную работу. Все сделали на высшем уровне!</p>
            </div>
            <div className="bg-gray-100 p-8 shadow-md">
              <img src="https://placehold.co/100x100" alt="Дмитрий" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Дмитрий</h3>
              <p>Отличная работа! Буду рекомендовать всем своим знакомым.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-yellow-300 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ответы и вопросы</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Как узнать стоимость услуги?</h3>
              <p>Вы можете узнать стоимость услуги, позвонив по телефону +7 (778) 905-12-44 или оставив заявку на сайте.</p>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Можно ли вызвать мастера на дом или офис?</h3>
              <p>Да, вы можете вызвать мастера на дом или офис, оставив заявку на сайте или позвонив по телефону +7 (778) 905-12-44.</p>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Сколько будет длиться ремонт?</h3>
              <p>Сроки ремонта зависят от сложности работы и наличия необходимых запчастей. Обычно ремонт занимает от 1 до 3 дней.</p>
            </div>
            <div className="bg-white p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Не нашли ответ на вопрос?</h3>
              <p>Вы можете задать свой вопрос, позвонив по телефону +7 (778) 905-12-44 или оставив заявку на сайте.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(map.png)` }}>
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-between px-12">
            <div className="bg-gray-100 p-8 shadow-md my-4 inline-block">
              <h3 className="text-xl font-bold mb-4">Ваш город: Смоленск</h3>
              <p>Режим работы: с 8:30 до 18:00 (Пн-Пт)</p>
              <p>+7 (702) 123-45-67</p>
              <button className="bg-red-500 text-white px-8 py-4 rounded-full mt-4">Заказать звонок</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;