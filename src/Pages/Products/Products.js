import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products.map((product, i) => (
        <Product key={i} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
