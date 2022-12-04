import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);

  return (
    <div>
      <div className='grid  grid-cols-[120px_1fr] items-center mb-8'>
        <span className='capitalize font-semibold mt-4'>colors: </span>
        <div className='flex mt-4'>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "opacity-100" : "opacity-50"
                } inline-block w-6 h-6 rounded-full border-transparent mr-2 cursor-pointer items-center justify-center`}
                onClick={() => setMainColor(color)}
              >
                <div className='text-sm text-white flex justify-center'>
                  {mainColor === color ? <FaCheck /> : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddToCart;
