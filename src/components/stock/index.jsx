import React, { useState, useEffect } from "react";
import stock from "../../assets/images/stock1.jpg";
import menu from "../../assets/images/stock2.png";
import cart1 from "../../assets/images/stock3.jpg";

const Stock = ({ modal, setModal, setCartModal, cartModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [stock, menu, cart1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const PrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const NextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{ zIndex: modal || cartModal ? "-2" : "1" }}
      className="relative mx-auto flex items-center justify-between w-10/12 h-96 bg-black border-2 rounded-xl border-gray-700"
    >
      <button
        className="w-10 h-10 bg-black opacity-50 text-[#FFD700] hover:opacity-100 active:opacity-50 absolute"
        onClick={PrevClick}
      >
        ←
      </button>
      <img
        className="w-full h-full rounded-lg"
        src={images[currentIndex]}
        alt="Stock Image"
      />
      <button
        className="w-10 h-10 bg-black opacity-50 text-[#FFD700] hover:opacity-100 active:opacity-50 absolute right-0"
        onClick={NextClick}
      >
        →
      </button>
    </div>
  );
};

export default Stock;
