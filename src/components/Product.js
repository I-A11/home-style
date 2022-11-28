import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <div>
      <div className='container relative bg-slate-400 rounded '>
        <img
          src={image}
          alt={name}
          className='w-full block object-cover rounded h-56 transition-all'
        />
        <Link
          to={`/products/${id}`}
          className='link absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all opacity-0  bg-blue-800'
        >
          <FaSearch className='text-white ' />
        </Link>
      </div>
      <footer className='flex justify-between mt-2 mx-1'>
        <h5 className='capitalize font-semibold text-gray-700'>{name}</h5>
        <p className='font-semibold text-blue-800'>{price}</p>
      </footer>
    </div>
  );
};

export default Product;
