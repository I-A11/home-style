import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='h-20 flex flex-col md:lg:flex-row items-center justify-center bg-blue-800 text-center'>
      <h5 className='text-white'>
        © {year}
        <span className='text-cyan-400-200 font-semibold mr-1'>
          {" "}
          HomeStyle{" "}
        </span>
      </h5>
      <h5 className='text-white'> All rights reserved</h5>
    </div>
  );
};

export default Footer;
