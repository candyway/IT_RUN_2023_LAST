import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../redux/food/foodSlice';
import Spinner from '../spinner';
import Fooditem from '../foodItem';
import menu from '../../assets/icons/menu2.png';

const Food = ({modal, cartModal}) => {
  const dispatch = useDispatch();
  const { food, isLoading } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }



  return (
    <div className="bg-black w-11/12 mx-auto pt-10">
      <img className="h-20 w-50 mx-auto" src={menu} alt="" />
      <div className="flex flex-wrap gap-20 justify-between px-20 pt-20">
        {food && Array.isArray(food) &&  food.map((el) => (
            <Fooditem modal={modal} cartModal={cartModal} key={el.id} food={el} />
          ))}
      </div>
    </div>
  );
};

export default Food;
