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
    register: builder.mutation({
      query: (formData) => ({
        url: `/users`,
        method: "POST",
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          cnic: formData.cnic,
          email: formData.email,
          password: formData.password,
        },
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({ url: `users/me` }),
      providesTags: (result, error) => [{ type: "getCurrentUser" }],
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery, useRegisterMutation } = apiSlice;
