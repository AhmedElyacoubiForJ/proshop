import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// added endpoints to the apiSlice, getProducts and getProductDetails
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // keep the data in the cache for 5 seconds
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});
// we use the convention that is used in react-query library "use" + endpoint name + "Query"
export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
