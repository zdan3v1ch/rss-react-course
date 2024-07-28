import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData, IResponse } from '../../../interfaces/MainPageInterface';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (builder) => ({
    getPeople: builder.query<IData, { searchParam: string; page: string }>({
      query: ({ searchParam, page }) => `?search=${searchParam}&page=${page}`
    }),
    getPeopleByID: builder.query<IResponse, string>({
      query: (id) => `${id}`
    })
  })
});

export const { useGetPeopleQuery, useGetPeopleByIDQuery } = apiSlice;
