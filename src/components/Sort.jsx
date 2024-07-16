import { useEffect } from "react";
import { useProductStore } from "../store/productStore";

export default function Sort() {
  const { sortProducts, sorting, setSorting } = useProductStore((state) => ({
    sortProducts: state.sortProducts,
    sorting: state.sorting,
    setSorting: state.setSorting,
  }));

  const handleSort = (event) => {
    setSorting(event.target.value);
    sortProducts();
  };

  return (
    <div className="flex sm:w-[95%] max-w-[21rem] md:w-full">
      <label htmlFor="sort" className="w-20 my-auto font-semibold">
        Sort by:{" "}
      </label>
      <select
        onChange={handleSort}
        value={sorting}
        name=""
        id="sort"
        className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
      >
        <option value="default">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}
