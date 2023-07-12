import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setItemInCart } from '../../redux/cart/cartSlice';
import pen from '../../assets/icons/pen.png';
import { getFood, updateFood } from '../../redux/food/foodSlice';

const Fooditem = ({ food }) => {
  const dispatch = useDispatch();

  const [change, setChange] = useState(false)
  const [title, setTitle] = useState(food.title)
  const [price, setPrice] = useState(food.price)
  const [description, setDescription] = useState(food.description)
  const [originalData, setOriginalData] = useState(null)

  const addInCart = () => {
    dispatch(setItemInCart(food));
  };

  const handleEditClick = () => {
    if (!change) {
      setOriginalData({
        title: title,
        price: price,
        description: description,
      });
    } else {
      const updatedData = {
        id: food.id,
        updateData: {
          title: title,
          price: price,
          description: description,
        },
      };
      dispatch(updateFood(updatedData))
        .then(() => {
          dispatch(getFood());
          setChange(false);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setChange(!change);
  };
  

  const handleCancelClick = () => {
    if (originalData) {
      setTitle(originalData.title);
      setPrice(originalData.price);
      setDescription(originalData.description);
    }
    setChange(false);
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
      <Link to={`/item/${food.id}`}>
        <img
          src={food.img}
          alt={food.title}
          className="h-48 w-48 rounded-lg shadow-md object-cover"
        />
      </Link>
      <div className="w-40 md:w-48 bg-white -mt-6 shadow-lg rounded-lg overflow-hidden">
        {change ? (
          <div className="py-2 px-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-1 h-5 w-full border border-gray-300 rounded-lg px-2 py-1 text-sm"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mb-1 h-5 w-full border border-gray-300 rounded-lg px-2 py-1 text-sm"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-1 h-5 w-full border border-gray-300 rounded-lg px-2 py-1 text-sm"
            />
            <div className="flex justify-between mt-2">
              <button onClick={handleEditClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="py-1 text-center font-bold uppercase tracking-wide text-gray-800 text-xs">
              {food.title}
            </div>
            <div className="flex items-center justify-between py-1 px-2 bg-gray-400">
              <h1 className="text-gray-800 font-bold text-xs">{food.price} KGS</h1>
              <button
                onClick={() => addInCart()}
                className="bg-black text-[#FFD700] font-semibold py-1 px-3 border border-[#C4C4C4] rounded transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent text-xs"
              >
                Купить
              </button>
              <button
                className="bg-[#FFD700] text-[#FFD700] font-semibold py-1 px-3 border border-[#C4C4C4] rounded transition-colors duration-300 hover:bg-gray-700 hover:border-transparent"
                onClick={handleEditClick}
              >
                <img className="w-4 h-4" src={pen} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fooditem;
