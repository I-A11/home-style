import React from "react";
import Logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
// import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <nav className='h-20 flex items-center justify-center mt-3'>
      <div className='w-[90vw] m-0 mx-auto maxWidth md:lg:grid grid-cols-[auto_1fr_auto] md:lg:items-center'>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img className='w-52 -ml-4 ' src={Logo} alt='logo' />
          </Link>
          <button
            className='bg-transparent border-transparent text-blue-800 text-3xl cursor-pointer md:lg:hidden'
            type='button'
          >
            <FaBars onClick={openSidebar} />
          </button>
        </div>
        <ul className='hidden md:lg:flex justify-center items-center'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li className='mx-2' key={id}>
                <Link
                  className='text-gray-700 text-base font-semibold capitalize p-2 hover:border-b-2 hover:border-blue-700'
                  to={url}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='hidden md:lg:grid'>
          <CartButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
