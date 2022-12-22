import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='mb-3'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='p-2 md:w-[90%] bg-gray-200 rounded-md border-transparent capitalize mt-16'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/*  categories */}
          <div className='mb-5 mt-6'>
            <h5 className='mb-2 font-semibold tracking-wide'>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    className={`block my-1 py-1 capitalize bg-transparent border-none  tracking-wide text-gray-700 font-semibold ${
                      category === c.toLowerCase() ? "text-blue-600" : null
                    }`}
                    key={index}
                    onClick={updateFilters}
                    name='category'
                    type='button'
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/*  companies */}
          <div className='mb-5 mt-4'>
            <h5 className='mb-2 font-semibold tracking-wide'>Company</h5>
            <select
              className='bg-gray-200 rounded-md border-transparent p-1'
              name='company'
              value={company}
              onChange={updateFilters}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className='mb-5'>
            <h5 className='mb-2 font-semibold tracking-wide'>Colors</h5>
            <div className='flex items-center'>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`flex items-center justify-center mr-2  ${
                        color === "all" ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    className={`flex items-center justify-center w-4 h-4 rounded-full bg-black mr-2 border-none  ${
                      color === c ? "opacity-100" : "opacity-50"
                    }`}
                    data-color={c}
                    style={{ background: c }}
                    onClick={updateFilters}
                    key={index}
                    name='color'
                  >
                    {color === c ? (
                      <div className='text-white text-[0.5rem]'>
                        <FaCheck />
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className='mb-5 mt-4'>
            <h5 className='mb-2 font-semibold tracking-wide'>Price</h5>
            <p className='mb-1'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          {/*  shipping */}
          <div className='mb-5 mt-4 grid grid-cols-[auto_1fr] items-center capitalize gap-x-8  text-base max-w-[150px] text-gray-700'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button
          type='button'
          className='bg-red-800 md:mb-10 text-white capitalize py-1 px-4 rounded-md'
          onClick={clearFilters}
        >
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
