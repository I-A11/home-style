import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};
  const decrease = () => {};

  return (
    <div className='grid grid-cols-[200px_auto_auto] grid-rows-[75px] gap-x-4 gap-y-12 items-center mb-12 md:grid-cols-[300px_1fr_1fr_1fr_auto]  md:items-center md:grid-rows-[75px] '>
      <div className='grid-rows-[75px] grid grid-cols-[75px_125px] items-center text-left gap-4 '>
        <img
          className='w-full h-full block rounded-md object-cover'
          src={image}
          alt={name}
        />
        <div>
          <h5 className='font-semibold text-gray-800'>{name}</h5>
          <p className='text-gray-800 text-sm font-semibold capitalize '>
            color:
            <span
              className='inline-block w-2 md:w-3 h-2 bg-red-500 ml-2 rounded-md'
              style={{ background: color }}
            ></span>
          </p>
          <h5 className='md:hidden text-sm font-semibold text-blue-700'>
            {formatPrice(price)}
          </h5>
        </div>
      </div>
      <h5 className='hidden md:block md:text-blue-700 md:font-semibold '>
        {formatPrice(price)}
      </h5>
      <div>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </div>
      <h5 className='hidden md:block text-blue-700 font-semibold ml-6 '>
        {formatPrice(price * amount)}
      </h5>
      <button
        type='button'
        className='text-white bg-red-800 w-6 h-6 flex items-center justify-center rounded-md'
        onClick={() => removeItem(id)}
      >
        <div className='text-xs'>
          <FaTrash />
        </div>
      </button>
    </div>
  );
};

export default CartItem;
