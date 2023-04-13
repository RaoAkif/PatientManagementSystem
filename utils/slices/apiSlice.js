import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://directus-production-9585.up.railway.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["getCurrentUser"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (cred) => ({
        url: `/auth/login`,
        method: "POST",
        body: cred,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({ url: `users/me` }),
      providesTags: (result, error) => [{ type: "getCurrentUser" }],
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = apiSlice;
