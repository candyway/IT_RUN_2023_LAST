import React from 'react';
import Food from '../../components/food';
import background from '../../assets/images/background1.jpg'

const Menu = () => {
    return (
        <div className='py-10' style={{ backgroundImage: `url(${background})`, backgroundSize: "30%" }}>
            <div className='bg-black w-11/12 mx-auto py-10'>
            <Food/>
            </div>
        </div>
    );
};

export default Menu;