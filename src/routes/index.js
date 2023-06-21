import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import Item from '../pages/Item';
import About from '../pages/About';
import Menu from '../pages/menu';

const routes = () => {
    return (
        <div>
           <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/item/:id' element={<Item/>}/>
            <Route path='/menu' element={<Menu/>}/>
            </Routes> 
        </div>
    );
};

export default routes;