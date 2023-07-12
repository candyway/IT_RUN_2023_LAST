import React from 'react';

const Footer = () => {
  const address = 'ул. Сладкая, д. 10, Бишкек';

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#FFD700]">
            <h3 className="text-2xl font-bold mb-2">CandyWay</h3>
            <p className="text-gray-300">Адрес: {address}</p>
            <p className="text-gray-300">Телефон: +7 123 456 789</p>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-300">
          &copy; {new Date().getFullYear()} CandyWay. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
