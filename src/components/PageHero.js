import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <div className='bg-blue-300 w-full min-h-[20vh] flex items-center'>
      <div className=' section-center'>
        <h3 className='text-blue-700 text-3xl font-semibold'>
          <Link to='/'> Home </Link>
          <span className='text-gray-800 capitalize'>
            {product && (
              <Link to='/products'>
                /<span className='text-blue-800'> Products</span>
              </Link>
            )}{" "}
            / {title}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
