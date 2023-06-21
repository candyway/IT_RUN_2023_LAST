import React from 'react';
import logo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {

   
    
    return (
        <>
         <div>
            <nav className='flex justify-between px-20 bg-gradient-to-r from-cyan-500 to-blue-500'>
             <Link to={'/'}> <img src={logo} alt="logo" className='w-40' /> </Link>
              <ul class="sm:flex space-x-4 hidden items-center gap-10">
          <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md "><Link to={'/about'}>About</Link></a></li>
          <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md "><Link to={'/menu'}>Menu</Link></a></li>
          <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Contacts</a></li>
              </ul>
              <button>LogIn</button>
            </nav>
            </div>   
        </>
    );
};

export default Header;