import React from "react";
import { PageHero } from "../components";
import aboutImage from "../assets/about-image.avif";

const AboutPage = () => {
  return (
    <div>
      <PageHero title='about' />
      <div className='page section section-center grid lg:grid-cols-2  gap-16'>
        <img
          className='w-full block rounded h-[500px]'
          src={aboutImage}
          alt='Living room'
        />
        <article>
          <div className='title'>
            <h2 className='text-3xl text-gray-800 capitalize tracking-wider font-bold'>
              our story
            </h2>
            <div className='underline'></div>
          </div>
          <p className='leading-10 max-w-[45rem] mx-auto my-0 mt-8 text-gray-700'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            possimus odit doloremque aut hic ea similique vitae. Aut autem
            minima ipsa nemo nam perspiciatis optio ad molestias numquam. Natus,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            minima ipsa nemo nam perspiciatis optio ad molestias numquam. Natus,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            possimus odit doloremque.
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
