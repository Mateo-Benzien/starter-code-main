// src/components/ProductCard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ratings from '../Ratings';

export default function ProductCard({ id, title, image, price, rating, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  const addToFavourites = (event) => {
    event.stopPropagation();
    // Add logic to add product to favourites
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden"
    >
      <img className="object-contain h-48 mt-3" src={image} alt={title} />

      <div className="flex-1 flex flex-col p-6">
        <div className="flex-1">
          <header className="mb-2 flex-2">
            <h2 className="text-lg line-clamp-2 font-extrabold leading-snug text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
              {title}
            </h2>
          </header>
          <Ratings {...rating} />
          <div className="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug">
            <h2>${price}</h2>
          </div>
        </div>

        <div className="flex mt-1 space-x-2">
          <div className="justify-start flex-1">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {category}
            </span>
          </div>
          <div className="justify-end space-x-2">
            <button onClick={addToFavourites}>
              <svg
                className="me-1.5 h-5 w-5 hover:fill-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                transform="scale(1.6)"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </button>

            <button className="inline-flex justify-center whitespace-nowrap rounded-lg bg-cyan-700 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
