import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className='section'>
      <div className='title'>
        <h2 className='text-3xl capitalize text-gray-800 font-semibold '>
          featured products
        </h2>
        <div className='underline mb-8'></div>
      </div>
      <div className='section-center grid gap-10 justify-center my-16 mx-auto lg:grid-cols-3 '>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
