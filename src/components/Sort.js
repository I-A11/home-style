import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  return (
    <div className='mt-4 lg:mt-16 mb-8 grid grid-cols-[1fr] sm:gap-y-3 sm:grid-cols-[auto_auto_1fr_auto] sm:items-center sm:gap-x-8 '>
      <div className='grid w-16 grid-cols-2 mb-4 sm:mb-0 '>
        <button
          type='button'
          className={`bg-transparent border border-black w-6 rounded h-6 flex justify-center items-center cursor-pointer ${
            grid_view ? "bg-black text-white" : null
          }`}
        >
          <BsFillGridFill className='text-base' />
        </button>
        <button
          type='button'
          className={`bg-transparent border border-black w-6 rounded h-6 flex justify-center items-center cursor-pointer ${
            !grid_view ? "bg-black text-white" : null
          }`}
        >
          <BsList className='text-base' />
        </button>
      </div>
      <p className='font-semibold mb-2 lg:mb-0'>
        {products.length} products found
      </p>
      <hr className='mb-8 lg:mb-0' />
      <form>
        <label className='capitalize font-semibold' htmlFor='sort'>
          sort by
        </label>
        <select
          name='sort'
          id='sort'
          className='border-transparent text-base capitalize px-2 py-1'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='price-name-a'>name (a - z)</option>
          <option value='price-name-z'>name (z - a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
