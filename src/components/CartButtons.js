import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <div className=' grid grid-cols-[1fr_1fr] items-center w-56'>
      <Link
        to='/cart'
        className='text-gray-700 text-xl flex items-center'
        onClick={closeSidebar}
      >
        Cart
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-6 ml-1' />
          <span className='absolute -top-3 -right-4 w-4 h-4 bg-blue-400 flex items-center justify-center rounded-3xl text-xs p-[11px]'>
            {total_items}
          </span>
        </span>
      </Link>
      {/* <button
        type='button'
        className='flex items-center bg-transparent border-transparent text-xl cursor-pointer text-gray-700'
      >
        Login{" "}
        <span className='ml-1'>
          <FaUserPlus />
        </span>
      </button> */}
    </div>
  );
};

export default CartButtons;
