import React from 'react';
import Stock from '../../components/stock';
import background from '../../assets/images/background1.jpg'
import Food from '../../components/food';
import alert from '../../assets/icons/alert1.png'

const HomePage = ({modal,cartModal,setModal,setCartModal}) => {
    return (
        <div  className='py-10' style={{ backgroundImage: `url(${background})`, backgroundSize: "30%"}}>
            <div className='bg-black w-11/12 mx-auto py-20'>
            <img className='w-2/3 mx-auto' src={alert} alt="" />
            <Stock modal={modal} setModal={setModal} setCartModal={setCartModal} cartModal={cartModal}/>
            <Food modal={modal} setModal={setModal} setCartModal={setCartModal} cartModal={cartModal}/>
            </div>
        </div>
    );
};

export default HomePage;