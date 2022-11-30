import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  // console.log(product);
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <div>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='grid gap-16 mt-8 lg:grid-cols-2'>
          <ProductImages />
          <section className=''>
            <h2 className='text-3xl font-semibold text-gray-800 capitalize'>
              {name}
            </h2>
            <Stars />
            <h5 className='text-blue-700 font-semibold text-lg'>
              {formatPrice(price)}
            </h5>
            <p className='max-w-2xl leading-8 mt-2'>{description}</p>
            <p className='capitalize w-80 flex mt-4'>
              <span className='font-semibold mr-7 '>Available:</span>
              {stock > 0 ? "In Stock" : "out of stock"}
            </p>
            <p className='capitalize w-80 flex mt-4'>
              <span className='font-semibold mr-16 '>SKU:</span>
              {sku}
            </p>
            <p className='capitalize w-80 flex mt-4'>
              <span className='font-semibold mr-12 mb-4 '>Brand:</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
