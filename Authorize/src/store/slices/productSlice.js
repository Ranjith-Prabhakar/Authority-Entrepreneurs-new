import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
  filter: { category: [], price: [0, 50000], rating: 0 },
  sort: 1,
  allProducts: [],
  productsAfterFilterNSort: [],
  currentTab: 1,
  currentPageProducts: [],
  category: [],
};
function currentPageProducts(state) {
  let { allProducts, filter, sort } = state;
  let newcurrentPageProducts = [];

  if (filter.category.length) {
    newcurrentPageProducts = allProducts.filter(
      (product) =>
        filter.category.includes(product.category) &&
        Number(product.price) >= Number(filter.price[0]) &&
        Number(product.price) <= Number(filter.price[1])
    );
  } else {
    newcurrentPageProducts = allProducts;
  }

  if (sort < 0) {
    newcurrentPageProducts.sort((a, b) => a.price - b.price);
  } else {
    newcurrentPageProducts.sort((a, b) => b.price - a.price);
  }

  state.productsAfterFilterNSort = newcurrentPageProducts;
  state.currentPageProducts = newcurrentPageProducts.slice(0, 6);
  state.currentTab = 1;
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    productsAfterFilterNSort: (state, action) => {
      state.productsAfterFilterNSort = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
      currentPageProducts(state);
    },
    updateFilter: (state, action) => {
      if (action.payload.prop === "category") {
        state.filter = {
          ...state.filter,
          category: action.payload.data,
        };
        currentPageProducts(state);
      } else if (action.payload.prop === "price") {
        state.filter = { ...state.filter, price: action.payload.data };
        currentPageProducts(state);
      }
    },
    updatePagination: (state, action) => {
      const lastIndex = action.payload.lastIndex;
      const newcurrentPageProducts = state.productsAfterFilterNSort.slice(
        lastIndex - 6,
        lastIndex
      );
      state.currentPageProducts = newcurrentPageProducts;
      state.currentTab = action.payload.tabNo;
    },
  },
});

export const {
  addAllProducts,
  productsAfterFilterNSort,
  updatePagination,
  setCategory,
  updateSort,
  updateFilter,
} = productSlice.actions;
export default productSlice.reducer;
