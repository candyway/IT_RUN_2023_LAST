import React from 'react';
import Stock from '../../components/stock';
import background from '../../assets/images/background1.jpg'
import Food from '../../components/food';

const HomePage = ({modal,cartModal,setModal,setCartModal}) => {
    return (
        <div className='py-10' style={{ backgroundImage: `url(${background})`, backgroundSize: "30%" }}>
            <div className='bg-black w-11/12 mx-auto py-20'>
            <p className='text-white text-center mb-10'>CandyWay</p>
            <Stock modal={modal} setModal={setModal} setCartModal={setCartModal} cartModal={cartModal}/>
            <Food/>
            </div>
        </div>
    );
};

export default HomePage;