import { create } from "zustand";

export const useProductStore = create((set) => ({
  // Initial state
  products: [],             // Array to store fetched products
  originalProducts: [],     // Array to store original fetched products (for sorting and searching)
  loading: false,           // Loading state indicator
  error: false,             // Error state indicator
  sorting: "default",       // Sorting option ("default", "low", "high")
  searchTerm: "",           // Search term entered by the user
  filterItem: "All categories", // Selected category filter

  // Action to set sorting option
  setSorting: (sorting) => set({ sorting }),

  // Action to set search term
  setSearchTerm: (searchTerm) => set({ searchTerm }),

  // Action to set category filter
  setFilterItem: (category) => set({ filterItem: category }),

  // Action to fetch products from API
  fetchProducts: async () => {
    const { filterItem } = useProductStore.getState();  // Get current filter item from state
    set({ loading: true });  // Set loading state to true

    try {
      let url = "https://fakestoreapi.com/products";
      if (filterItem !== "All categories") {
        url = `https://fakestoreapi.com/products/category/${filterItem}`;
      }
      const response = await fetch(url);  // Fetch products from the API

      if (!response.ok) {
        throw new Error("Data fetching failed, please check your network connection");
      }

      const data = await response.json();  // Parse JSON response
      set({
        products: data,               // Update products with fetched data
        originalProducts: data,       // Update originalProducts with fetched data
        loading: false,               // Set loading state to false
        error: false,                 // Reset error state
      });
    } catch (error) {
      set({ error: error.message, loading: false });  // Set error message and reset loading state on error
    } finally {
      useProductStore.getState().sortProducts();   // Sort products after fetching
      useProductStore.getState().searchProducts(); // Search products after fetching
    }
  },

  // Action to sort products based on sorting option
  sortProducts: () => {
    const { sorting, products, originalProducts } = useProductStore.getState();

    if (sorting !== "default") {
      const sortedProducts = [...products].sort((a, b) =>
        sorting === "low" ? a.price - b.price : b.price - a.price
      );
      set({ products: sortedProducts });  // Update products with sorted array
    } else {
      set({ products: originalProducts }); // Reset products to originalProducts array
    }
  },

  // Action to search products based on search term
  searchProducts: () => {
    const { originalProducts, searchTerm } = useProductStore.getState();

    if (searchTerm.trim() !== "") {
      const filteredProducts = originalProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      set({ products: filteredProducts });  // Update products with filtered array
    } else {
      set({ products: originalProducts }); // Reset products to originalProducts array
    }
  },
}));
