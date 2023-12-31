/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/ecommerce.png';
import { CartContext } from '../../../Context/ContextCart';

const Navbar = () => {
  const { carts } = useContext(CartContext);

  // console.log(carts?.length);

  return (
    <div className="navbar bg-base-100 shadow-lg rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li>
              <Link to={'/products'}> Products</Link>
            </li>

            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
          <img className="w-10" src={logo} alt="" />
          Brandistic
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}> Products</Link>
          </li>

          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end items-center">
        <Link to={'/carts'}>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-neutral badge-sm  indicator-item">{carts?.length}</span>
            </div>
          </label>
        </Link>
        {/* <Link to={'/carts'}>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Go to Cart
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
