import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../redux/food/foodSlice';
import Spinner from '../spinner';
import Fooditem from '../foodItem';


const Food = () => {
    const dispatch = useDispatch();
    const { food, isLoading } = useSelector(state => state.food);

    useEffect(() => {
        dispatch(getFood());
    }, [dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className='flex flex-wrap gap-20 justify-between px-20 pt-20' style={
            { backgroundImage: `url("https://oir.mobi/uploads/posts/2022-08/1661436489_48-oir-mobi-p-fon-konditerskie-izdeliya-instagram-52.jpg")` }
        }>
            {food &&
                food.map(el => (
                    <Fooditem
                        key={el.id}
                        title={el.title}
                        img={el.img}
                        price={el.price}
                        id={el.id}
                        desc={el.description}
                    />
                ))}
        </div>
    );
};

export default Food;
