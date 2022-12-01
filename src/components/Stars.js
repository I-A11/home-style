import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className='text-yellow-500 '>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className='flex items-center'>
      <div className=' flex mt-4 mb-2'>{tempStars}</div>
      <div className='ml-4 mt-4 mb-2'>({reviews} customer reviews)</div>
    </div>
  );
};

export default Stars;
