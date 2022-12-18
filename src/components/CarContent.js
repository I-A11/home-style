import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CarContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='flex justify-between mt-8'>
        <Link
          to='/products'
          className='bg-blue-700 text-white capitalize px-2 py-1 rounded-md '
        >
          continue shopping
        </Link>

        <button
          type='button'
          className='bg-black text-white capitalize px-2 py-1 rounded-md '
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CarContent;
