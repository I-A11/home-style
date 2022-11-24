import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/bg-image.avif";
import heroBcg2 from "../assets/home-hero.avif";

const Hero = () => {
  return (
    <div className='section-center min-h-[50vh] grid items-center lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 gap-32'>
      <div>
        <h1 className='text-4xl text-gray-900 font-semibold capitalize'>
          design your <br />
          comfort zone
        </h1>
        <p className='mt-6 leading-8 text-gray-700 max-w-[45em]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          tenetur pariatur ex excepturi minus reiciendis tempora voluptas in
          facilis cupiditate.
        </p>
        <Link to='/products' className='btn mt-5 lg:px-6 text-base  '>
          Shop now
        </Link>
      </div>
      <div className='hidden lg:block relative'>
        <img
          src={heroBcg2}
          alt='nice bedroom'
          className='w-full h-[450px] relative rounded object-cover '
        />
        <img
          src={heroBg}
          alt='person working'
          className='absolute bottom-0 left-0 w-[250px] -translate-x-1/3'
        />
      </div>
    </div>
  );
};

export default Hero;
