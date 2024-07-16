import { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";
import { getCategories } from "../api/api";
import Error from "./Error";

export default function Filter() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const {
    fetchProducts,
    searchProducts,
    filterItem,
    setFilterItem,
    searchTerm,
    setSearchTerm,
  } = useProductStore((state) => ({
    fetchProducts: state.fetchProducts,
    searchProducts: state.searchProducts,
    filterItem: state.filterItem,
    setFilterItem: state.setFilterItem,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  useEffect(() => {
    const initializeCategories = async () => {
      const { response, error } = await getCategories();

      if (error) {
        setError(error);
      }
      setCategories(response);
    };
    initializeCategories();
    fetchProducts();
  }, []);

  const toggleDropdown = () => {
    const dropDown = document.getElementById("dropdown");
    dropDown.classList.contains("hidden")
      ? dropDown.classList.remove("hidden")
      : dropDown.classList.add("hidden");
  };

  const handleFilter = (category) => {
    setFilterItem(category);
    document.getElementById("dropdown").classList.add("hidden");
    fetchProducts();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    searchProducts(searchTerm);
  };

  if (error) {
    return <Error error={error} />;
  }

  return (
    <form>
      <div className="flex lg:w-[31.25rem] sm:w-[95%] md:w-full relative">
        <button
          onClick={toggleDropdown}
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 "
          type="button"
        >
          {filterItem}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 absolute top-[100%] hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdown-button"
          >
            <li
              onClick={() => handleFilter("All categories")}
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
            >
              All categories
            </li>
            {categories.map((name) => {
              return (
                <li key={name}>
                  <button
                    onClick={() => handleFilter(name)}
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            name="searchInput"
            className=" p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
