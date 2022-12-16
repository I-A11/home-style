import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className='page-100'>
        <div className='text-center'>
          <h2 className='text-3xl mb-4 font-semibold mt-10'>
            Your cart is empty
          </h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </div>
    );
  }
  return (
    <main>
      <PageHero title='cart' />
      <div className='page'>
        <CartContent />
      </div>
    </main>
  );
};

export default CartPage;
