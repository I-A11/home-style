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

  console.log(colors);

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='mb-5'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='p-2 md:w-[90%] bg-gray-200 rounded-md border-transparent capitalize mt-16'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* search input */}
        </form>
      </div>
    </div>
  );
};

export default Filters;
