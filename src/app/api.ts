// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// // import type { Book } from '@/types/book'

// // export const api = createApi({
// //   reducerPath: 'api',
// //   baseQuery: fetchBaseQuery({ baseUrl: 'https://ph-level2-b5-assignment-3-cxgy.vercel.app/api' }), // Update if different
// //   tagTypes: ['Book'],
// //   endpoints: (builder) => ({
// //     getBooks: builder.query<Book[], void>({
// //       query: () => '/books',
// //       providesTags: ['Book'],
// //     }),
// //   }),
// // })

// // export const { useGetBooksQuery } = api


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Book } from '@/types/book'

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://ph-level2-b5-assignment-3-cxgy.vercel.app/api',
//   }),
//   tagTypes: ['Book'],
//   endpoints: (builder) => ({
//     getBooks: builder.query<Book[], void>({
//       query: () => '/books',
//     //   transformResponse: (response: { data: Book[] }) => response.data,
//     transformResponse: (response: { data: Book[] }) => {
//         console.log('📦 Raw API Response:', response)
//         return response.data
//       },
      
//       providesTags: ['Book'],
//     }),
//   }),
// })

// export const { useGetBooksQuery } = api


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Book } from '@/types/book'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://ph-level2-b5-assignment-3-cxgy.vercel.app/api',
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => '/books',
      transformResponse: (response: { success: boolean, message: string, data: Book[] }) => {
        console.log('📦 Raw API Response:', response)
        return response.data
      },
      providesTags: ['Book'],
    }),
  }),
})

export const { useGetBooksQuery } = api
