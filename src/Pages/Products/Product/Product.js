/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, price, category, image, description } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl h-96">
      <figure>
        <img className="w-52" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title}</h2>
        <p className="truncate ..."> {description}</p>
        <div className="card-actions justify-between items-center">
          <Link to={`/product/${id}`}>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Details
            </button>
          </Link>
          <div>
            <div className="badge badge-outline"> {category}</div>{' '}
            <div className="badge badge-neutral">${price} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
