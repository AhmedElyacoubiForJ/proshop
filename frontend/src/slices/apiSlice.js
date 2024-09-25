import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// is a parent slice, API slice, to deal with our backend API requests
// in an asyncchronous manner
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"], // types of data that will be fetched from the our backend API
  endpoints: (builder) => ({}), // requests building comming in separate files
});
