import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFood, getFood } from "../../redux/food/foodSlice";

const Modal = ({ modal, setModal }) => {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [img, setImg] = useState(null);
  const [description,setDescription] = useState(null)

  const dispatch = useDispatch();
  const food = useSelector((state) => state.food);

  const create = useCallback(() => {
    const foodData = {
      title,
      price,
      img,
      description
    };
    dispatch(createFood(foodData)).then(() => {
      dispatch(getFood())
    });
  }, [title, price, img, description, dispatch]);


  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        backdropFilter: "blur(10px)",
        top: "0px",
        left: "0px",
      }}
    >
      <div
        style={{
          width: "600px",
          margin: "0px auto",
          border: "solid 1px black",
          padding: "30px",
          borderRadius: "10px",
          position: "fixed",
          top: "10%",
          right: "23%",
          background: "white",
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <button className="bg-black text-[#FFD700] font-semibold w-7 h-7 border border-[#C4C4C4] rounded-full transition-colors duration-300 hover:bg-[#FFD700] hover:text-black hover:border-transparent text-xs" onClick={() => setModal(false)}>x</button>
        <h4
          class="text-xl font-bold text-navy-700 dark:text-white mb-3"
          style={{ width: "50%", margin: "15px auto" }}
        >
          Добавить товар
        </h4>
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Название
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Название"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="phone"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            цена
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Цена"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label class="mb-3 block text-base font-medium text-[#07074D]">
            ссылка на фото
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="URL"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Описание
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Описание"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div>
          <button
            onClick={() => {
              create();
              setModal(false);
            }}
            class="hover:shadow-form w-full rounded-md bg-black text-[#FFD700] hover:bg-[#FFD700] transition-colors duration-300 hover:text-black py-3 px-8 text-center text-base font-semibold outline-none"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
