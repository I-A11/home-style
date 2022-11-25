import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <div className=' bg-blue-200 lg:mb-20 '>
      <div className='section-center px-4 pt-10'>
        <article className='p-8 lg:grid lg:grid-cols-[1fr_1fr]'>
          <h3 className='mb-8 text-gray-800 text-xl lg:text-3xl lg:tracking-wide  font-semibold'>
            Custom furniture <br />
            built only for you
          </h3>
          <p className='text-gray-700 lg:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            deleniti quae fuga quia fugit tempore magnam, eligendi laudantium
            modi debitis.
          </p>
        </article>
        <div className='mt-6 lg:-mt-10 pb-10 lg:pb-0 grid gap-10 lg:grid-cols-3 lg:translate-y-16'>
          {services.map((service) => {
            const { id, icon, title, text } = service;

            return (
              <article
                key={id}
                className='bg-blue-400 text-center py-10 px-8 rounded'
              >
                <span className='bg-red-100 rounded-full w-16 h-16 grid my-0 mx-auto items-center justify-center mb-4 text-4xl text-cyan-800'>
                  {icon}
                </span>
                <h4 className='text-center text-gray-800 text-3xl capitalize font-semibold'>
                  {title}
                </h4>
                <p className='text-gray-700 leading-7 mt-4'>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
