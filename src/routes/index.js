import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import Item from '../pages/Item';
import About from '../pages/About';
import Menu from '../pages/menu';
import Header from '../components/header';
import Footer from '../components/footer';

const Routess = () => {

    const [modal, setModal] = React.useState(false)
    const [cartModal,setCartModal] = React.useState(false)

    return (
        <div>
            <Header setModal={setModal} modal={modal} setCartModal={setCartModal} cartModal={cartModal}/>
           <Routes>
            <Route path='/' element={<HomePage modal={modal} setModal={setModal} setCartModal={setCartModal} cartModal={cartModal}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/item/:id' element={<Item/>}/>
            <Route path='/menu' element={<Menu/>}/>
            </Routes> 
            <Footer/>
        </div>
    );
};

export default Routess;