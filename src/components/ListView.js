import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className='grid gap-y-12 mb-10'>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article
            className='lg:grid lg:grid-cols-[auto_1fr] gap-x-8 items-center'
            key={id}
          >
            <img
              className=' block w-80 h-52 object-cover rounded-md mb-4'
              src={image}
              alt={name}
            />
            <div>
              <h4 className='capitalize text-gray-800 text-xl font-semibold mb-2 mr-8'>
                {name}
              </h4>
              <h5 className='font-semibold text-blue-800'>
                {formatPrice(price)}
              </h5>
              <p className='mt-2 leading-8 text-gray-800'>
                {description.substring(0, 150)}...
              </p>
              <Link to={`/products/${id}`} className='btn mt-2 text-xs'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
