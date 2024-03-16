import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IChannelWithPostsData } from '@/app/types';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IChannelWithPostsData[], void>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
