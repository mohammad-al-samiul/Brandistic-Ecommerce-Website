/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CategoryProducts from './CategoryProducts/CategoryProducts';
import Product from './Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=9`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="mt-10 px-5">
      <CategoryProducts />
      <div>
        <h3 className="text-center text-xl  text-neutral font-bold my-5">All Products</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product, i) => (
          <Product key={i} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
