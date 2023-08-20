/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Context/ContextCart';

const ProductDetails = () => {
  const [cartItem, setCartItem] = useState([]);
  const product = useLoaderData();
  const navigate = useNavigate();
  const { setCarts } = useContext(CartContext);
  const { category, description, image, price, title, rating } = product;

  const handleCart = (product, redirect) => {
    const carts = JSON.parse(localStorage.getItem('carts')) || [];

    const isProductExist = carts.find((item) => item?.id === product?.id);
    if (isProductExist) {
      const updateProduct = carts.map((item) => {
        if (item.id === product?.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });

      localStorage.setItem('carts', JSON.stringify(updateProduct));
    } else {
      //console.log('new product added');
      localStorage.setItem('carts', JSON.stringify([...carts, { ...product, quantity: 1 }]));
      const cart = JSON.parse(localStorage.getItem('carts')) || [];

      setCarts(cart);
    }
    if (redirect) {
      const carts = JSON.parse(localStorage.getItem('carts')) || [];
      setCarts(carts);

      navigate('/carts');
    }
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg my-10">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
                src={image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest"> {category}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                <div className="flex mb-4">
                  <span className="flex items-center font-bold">
                    Rating: {''} {rating.rate}
                    <span className="text-gray-600 ml-3">{rating.count} Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
                  <button
                    onClick={() => handleCart(product, true)}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleCart(product)}
                    className="flex ml-3 text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
