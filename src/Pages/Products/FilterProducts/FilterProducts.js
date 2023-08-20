import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import FilterProduct from './FilterProduct';

const FilterProducts = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setFilterProducts(data);
      });
  }, [name]);
  return (
    <div>
      <CategoryProducts />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {filterProducts.map((filterProduct, i) => (
          <FilterProduct key={i} filterProduct={filterProduct}></FilterProduct>
        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
