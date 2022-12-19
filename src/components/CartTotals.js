import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <div className='mt-12 flex justify-center flex-col w-80'>
      <article className='border border-gray-800 py-6 px-12 rounded-md '>
        <h5 className='grid grid-cols-[200px_1fr] font-semibold capitalize'>
          subtotal: <span>{formatPrice(total_amount)}</span>
        </h5>
        <p className='grid grid-cols-[200px_1fr] text-sm font-semibold text-gray-700 capitalize mb-3'>
          shipping fee : <span>{formatPrice(shipping_fee)}</span>
        </p>
        <hr />
        <h4 className='grid grid-cols-[200px_1fr] font-semibold capitalize mt-4'>
          order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>
      <Link to='/checkout' className='btn mt-6 mx-auto w-80 text-center'>
        proceed to checkout
      </Link>
    </div>
  );
};

export default CartTotals;
