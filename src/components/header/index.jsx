import React, { useState } from 'react';
import logo from '../../assets/icons/logo3.png';
import { Link } from 'react-router-dom';
import plus from '../../assets/icons/plus2.png';
import Modal from '../modal';
import cart from '../../assets/icons/cart1.png'
import CartModal from '../cartModal';

const Header = ({modal,setModal,cartModal,setCartModal}) => {
  

  return (
    <>
      <div>
        <nav className="flex justify-between px-20 bg-black shadow-lg">
          <Link to={'/'}>
            <img src={logo} alt="logo" className="w-40" />
          </Link>
          <ul className="sm:flex space-x-4 hidden items-center gap-10">
            <li>
              <Link
                to={'/about'}
                className="text text-[#C4C4C4] hover:text-[#FFD700] text-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={'/menu'}
                className="text-[#C4C4C4] hover:text-[#FFD700] text-md"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to={'/contacts'}
                className="text-[#C4C4C4] hover:text-[#FFD700] text-md"
              >
                Contacts
              </Link>
            </li>
            <button
              onClick={() => setModal(true)}
             className="w-15 h-10 bg-transparent text-[#C4C4C4] font-semibold py-2 px-4 border border-[#C4C4C4] rounded transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent"
            >
              <img src={plus} alt="" className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCartModal(true)}
             className="w-15 h-10 bg-transparent text-[#C4C4C4] font-semibold py-2 px-4 border border-[#C4C4C4] rounded transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent"
            >
              <img src={cart} alt="" className="w-5 h-5" />
            </button>
          </ul>
          {modal && <Modal modal={modal} setModal={setModal} />}
          {cartModal && <CartModal setCartModal={setCartModal}/>}
          <button className="text-[#C4C4C4] hover:text-[#FFD700]">LogIn</button>
        </nav>
      </div>
    </>
  );
};

export default Header;
