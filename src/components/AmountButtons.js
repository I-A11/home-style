import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='grid w-36 justify-center grid-cols-3 items-center'>
      <button type='button' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='text-3xl font-semibold'>{amount}</h2>
      <button type='button' onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
