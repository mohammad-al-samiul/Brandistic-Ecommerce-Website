import React, { useEffect, useState } from 'react';
import Product from '../../Products/Product/Product';
import Hero from '../Hero/Hero';

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=9`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <>
        <Hero />
      </>
      <h3 className="mt-10 font-bold text-center text-4xl">Product</h3>
      <div className="px-3 my-10 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
