import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <div className='text-center'>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='flex justify-between items-center py-4 px-6'>
          <img
            src={logo}
            alt='Home style logo'
            className='justify-center h-11'
          />
          <button
            type='button'
            className='text-3xl bg-transparent text-red-800'
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='mb-8'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link
                  onClick={closeSidebar}
                  className='block text-left text-lg font-semibold capitalize text-gray-800 px-6 py-4 transition-all ease-linear  hover:px-8 hover:py-4 hover:bg-gray-200'
                  to={url}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              onClick={closeSidebar}
              className='block text-left text-lg font-semibold capitalize text-gray-800 px-6 py-4 transition-all ease-linear  hover:px-8 hover:py-4 hover:bg-gray-200'
              to='./checkout'
            >
              checkout
            </Link>
          </li>
        </ul>
        <div className='my-8 flex justify-center '>
          <CartButtons />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
