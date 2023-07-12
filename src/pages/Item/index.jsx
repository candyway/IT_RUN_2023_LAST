import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import background from '../../assets/images/background1.jpg'

const Item = () => {
  const { id } = useParams();
  const { food } = useSelector(state => state.food);
  const foodItem = food[id];

  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: '30%'}} className="bg-gray-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-400 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={foodItem.img} alt={foodItem.title} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-3xl font-bold mb-4">{foodItem.title}</h1>
              <p className="text-gray-700 mb-4">Цена: {foodItem.price}</p>
              <p className="text-gray-700 mb-4">{foodItem.description}</p>
              <button className="py-2 px-4 bg-black text-[#FFD700] rounded hover:text-black hover:bg-[#FFD700] active:bg-[#F0E68C] disabled:opacity-50 mt-4">
                Добавить в заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
