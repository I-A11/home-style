import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className='mb-16'>
      <div className='grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
