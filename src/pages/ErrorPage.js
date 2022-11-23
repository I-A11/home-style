import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='bg-blue-200 flex justify-center items-center text-center min-h-[calc(100vh-10.5rem)] py-10'>
      <div>
        <h1 className='text-[10rem] font-semibold'>404</h1>
        <h3 className='mb-8 text-4xl'>
          Sorry, the page you tried cannot be found
        </h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
