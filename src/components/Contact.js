import React from "react";

const Contact = () => {
  return (
    <div className='mb-10 lg:mb-20'>
      <div className='section-center '>
        <h3 className='mt-20 lg:mt-40 text-2xl lg:text-4xl font-semibold text-gray-800'>
          Join our newsletter and get 20% off
        </h3>
        <div className='grid lg:grid-cols-2 lg:gap-16 mt-6'>
          <p className='text-gray-700 leading-8 mb-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur iusto ullam iure, numquam excepturi minima voluptatum
            maiores beatae pariatur reiciendis!
          </p>
          <form>
            <input
              className='border-2 border-blue-600 rounded-l-md px-3 py-2 w-2/3'
              type='email'
              placeholder='enter email'
            />
            <button
              className='border-2 border-blue-600 bg-blue-600 rounded-r-md text-white px-3 py-2 mb-9'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
