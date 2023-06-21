import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">О нас</h1>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img
              src="https://inspiregroup.pro/wp-content/uploads/2016/11/Biskvit-vid-2.jpg"
              alt="Ресторан"
              className="rounded-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Кондитерский ресторан</h2>
            <p className="text-gray-700 mb-4">
              Мы - кондитерский ресторан, предлагающий вам самые изысканные и
              вкусные десерты. Наша команда талантливых кондитеров постоянно
              работает над созданием уникальных вкусовых комбинаций и
              потрясающих дизайнов.
            </p>
            <p className="text-gray-700 mb-4">
              Мы гордимся использованием только самых качественных и свежих
              ингредиентов. Все наши десерты готовятся с любовью и заботой,
              чтобы каждый кусочек был незабываемым и впечатлил вас своим
              вкусом и красотой.
            </p>
            <p className="text-gray-700 mb-4">
              Мы стремимся предоставить нашим клиентам непревзойденный опыт и
              создать особую атмосферу в нашем ресторане. Мы рады приветствовать
              вас и поделиться нашими уникальными творениями.
            </p>
            <p className="text-gray-700">
              Доверьтесь нам, и мы обещаем, что ваш опыт с нашими десертами
              останется надолго в вашей памяти.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;