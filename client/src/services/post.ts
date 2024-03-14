import { IChannelWithPostsData } from '@/app/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IChannelWithPostsData[], undefined>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
