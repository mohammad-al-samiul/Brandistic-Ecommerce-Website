import React, { useEffect, useState } from 'react';
import CategoryProduct from './CategoryProduct/CategoryProduct';

const CategoryProducts = () => {
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setProductCategories(data);
      });
  }, []);
  return (
    <div>
      <h3 className="font-bold text-center text-2xl my-10">All Category</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productCategories?.map((category, i) => (
          <CategoryProduct key={i} category={category}></CategoryProduct>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
