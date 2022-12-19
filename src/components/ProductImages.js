import React, { useState } from "react";
// import { GiLogging } from "react-icons/gi";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div>
      <img
        className='h-[300px] sm:h-[500px] lg:h-80 w-full  rounded-lg object-cover'
        src={main.url}
        alt='main'
      />
      <div className='mt-4 grid grid-cols-5 gap-4'>
        {images.map((image, index) => {
          return (
            <img
              className={`rounded-lg h-16 md:h-20 lg:h-24 ${
                image.url === main.url ? "active" : null
              }`}
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
