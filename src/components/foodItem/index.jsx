import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setItemInCart } from '../../redux/cart/cartSlice';
import pen from '../../assets/icons/pen.png';
import { deleteFood, getFood, updateFood } from '../../redux/food/foodSlice';
import { toast } from 'react-toastify';

const Fooditem = ({ food ,modal, cartModal}) => {
  const dispatch = useDispatch();

  const [change, setChange] = useState(false)
  const [title, setTitle] = useState(food.title)
  const [price, setPrice] = useState(food.price)
  const [description, setDescription] = useState(food.description)
  const [originalData, setOriginalData] = useState(null)

  const {user} = useSelector(state => state.user)

  const addInCart = () => {
    dispatch(setItemInCart(food));

    toast.success(`Добавлено в корзину: ${food.title}`, {
      position: "top-right",
      autoClose: 3000,
    });
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
        .then(res => {
          dispatch(getFood());
          setChange(false);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setChange(!change);
  };
  
  const deleteProduct = (id) => {
    dispatch(deleteFood(id))
  }

  const handleCancelClick = () => {
    if (originalData) {
      setTitle(originalData.title);
      setPrice(originalData.price);
      setDescription(originalData.description);
    }
    setChange(false);
  };


  return (
    <div 
    style={{zIndex: cartModal || modal ? '-2' : '1'}}
    className="flex flex-col justify-center items-center max-w-sm mx-auto my-8 relative">
       {
        user.email == 'admin@gmail.com' ? <button
        onClick={() => deleteProduct(food.id)}
        className="bg-black text-[#FFD700] font-semibold w-7 h-7 border border-[#C4C4C4] rounded-full transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent text-xs absolute top-2 left-2"
      >
        x
      </button>
       : <div></div>
       }
      <Link to={`/item/${food.id}`}>
        <img
          src={food.img}
          alt={food.title}
          className="h-48 w-48 rounded-lg shadow-md object-cover"
        />
      </Link>
      <div className="w-40 md:w-48 bg-white -mt-6 shadow-lg rounded-lg overflow-hidden">
        {change ? (
          <div className="py-2 px-4 bg-gray-700">
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
              <button className="bg-black text-[#FFD700] font-semibold py-1 px-3 border border-[#C4C4C4] rounded-xl transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent text-xs" onClick={handleEditClick}>Save</button>
              <button className="bg-black text-[#FFD700] font-semibold py-1 px-3 border border-[#C4C4C4] rounded-xl transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent text-xs" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="py-1 text-center font-bold uppercase tracking-wide text-gray-800 text-xs">
              {food.title}
            </div>
            {
              user.email == 'admin@gmail.com' ? <div className="flex items-center justify-between py-1 px-2 bg-gray-400">
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
            </div> : 
            <div className="flex items-center justify-between py-1 px-2 bg-gray-400">
            <h1 className="text-gray-800 font-bold text-xs">{food.price} KGS</h1>
            <button
              onClick={() => addInCart()}
              className="bg-black text-[#FFD700] font-semibold py-1 px-3 border border-[#C4C4C4] rounded transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent text-xs"
            >
              Купить
            </button>
          </div>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Fooditem;
