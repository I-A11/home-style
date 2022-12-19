import React from "react";

const CartColumns = () => {
  return (
    <div className='hidden md:block'>
      <div className='grid grid-cols-[316px_1fr_1fr_1fr_auto] items-center gap-4'>
        <h5 className='text-gray-700 capitalize font-semibold mb-8'>item</h5>
        <h5 className='text-gray-700 capitalize font-semibold mb-8'>price</h5>
        <h5 className='text-gray-700 capitalize font-semibold mb-8'>
          quantity
        </h5>
        <h5 className='text-gray-700 capitalize font-semibold mb-8'>
          subtotal
        </h5>
        <h5 className='text-gray-700 capitalize font-semibold mb-8'>
          <span></span>{" "}
        </h5>
      </div>
    </div>
  );
};

export default CartColumns;
