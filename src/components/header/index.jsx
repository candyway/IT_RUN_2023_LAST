import React, { useState } from 'react';
import logo from '../../assets/icons/logo3.png';
import { Link } from 'react-router-dom';
import plus from '../../assets/icons/plus2.png';
import Modal from '../modal';
import cart from '../../assets/icons/cart1.png'
import CartModal from '../cartModal';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAccount } from '../../redux/user/userSlice';

const Header = ({modal,setModal,cartModal,setCartModal}) => {

  const {user} = useSelector((store) => store.user)
  const dispatch = useDispatch()


  

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
            {
              user.email == 'admin@gmail.com' ? 
              <div className='flex gap-10'><button
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
            </button></div> :
            <button
            onClick={() => setCartModal(true)}
           className="w-15 h-10 bg-transparent text-[#C4C4C4] font-semibold py-2 px-4 border border-[#C4C4C4] rounded transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent"
          >
            <img src={cart} alt="" className="w-5 h-5" />
          </button>
            }
            
          </ul>
          {modal && <Modal modal={modal} setModal={setModal} />}
          {cartModal && <CartModal setCartModal={setCartModal}/>}
          {
                  user.email.length ?
                  <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                    <p className='text-white'>{user.email.split('@')[0]}</p>
                   <button onClick={() => {
                    dispatch(logOutAccount())
                    localStorage.removeItem('user')
                  }} className="text-[#C4C4C4] hover:text-[#FFD700]">LogOut</button>
                  </div> :       
                  <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <Link to='/signin' className="text-[#C4C4C4] hover:text-[#FFD700]">LOGIN</Link>
                  <Link to='/signup' className="text-[#C4C4C4] hover:text-[#FFD700]">SIGNUP</Link>
                  </div>
                }
        </nav>
      </div>
    </>
  );
};

export default Header;
