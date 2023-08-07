/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, price, category, image } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl h-96">
      <figure>
        <img className="w-52" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between">
          <Link to={`/product/${id}`}>
            <button className="btn btn-sm  btn-secondary">Details</button>
          </Link>
          <div>
            <div className="badge badge-outline"> {category}</div>
            <div className="badge badge-neutral">${price} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
