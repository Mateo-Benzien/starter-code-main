// Home.jsx

import React from 'react';
import ProductList from '../components/Product/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

export default function Home() {
  return (
    <>
      {/* Filter and Sort components for user interaction */}
      <div className="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center">
        <Filter />
        <Sort />
      </div>
      {/* ProductList component to display products */}
      <ProductList />
    </>
  );
}
