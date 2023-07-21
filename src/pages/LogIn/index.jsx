import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { RegistrAccount } from '../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/images/background1.jpg'

const LogIn = () => {

    const [show,setShow] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: 'onBlur'})
    
    const onSubmit = (data) => {
        axios.post('http://localhost:8000/login', data)
        .then((res) => {
          dispatch(RegistrAccount
            ({
            ...res.data.user,
            token: res.data.accessToken
          }))
          navigate('/')
          localStorage.setItem('user', JSON.stringify({
            ...res.data.user,
            token: res.data.accessToken
          }))
        }).catch((err) => alert(err))
      }

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "30%" }} className="flex justify-center items-center min-h-screen bg-black">
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="bg-black p-8 w-4/5 h-96 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Вход</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full py-2 px-3 rounded-md bg-gray-300 text-black focus:outline-none focus:bg-white"
            placeholder="Введите ваш email"
            required
            {...register('email',{
                required: {
                    message: 'Email обязателен к заполнению',
                    value: true
                },
                minLength: {
                    message: 'Минимум 10 символа',
                    value: 10
                },
                pattern: {
                    message: 'Напишите правильно свой email',
                    value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                }
            
            })}   
          />
          <p className='register__form-error text-gray-200 mb-5'>
    {errors.email && errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-200 font-semibold mb-2">
            Пароль
          </label>
          <input
            type={show ? 'text' : 'password'}
            className="w-full py-2 px-3 rounded-md bg-gray-300 text-black focus:outline-none focus:bg-white"
            placeholder="Введите пароль"
            required
            {...register('password', {
                required: {
                    message: "Пароль обязателен к заполнению",
                    value: true
                },
                pattern: {
                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                    message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                }
            })}
          />
          <p className='register__form-error text-gray-200 mb-5'>
    {errors.password && errors.password?.message}</p>
    <label className='register__form-label register__form-label_checkbox'>
    <input  className='register__form-input register__form-input_checkbox' type="checkbox" checked={show} onChange={() => setShow(!show)}/>
    <span className='register__form-show text-gray-200'>Показать пароль</span>
</label>
        </div>
        <button
          type="submit"
          className="py-2 px-4 border-2 text-[#FFD700] rounded-md font-semibold hover:bg-[#FFD700] hover:text-black transition duration-300"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LogIn;
