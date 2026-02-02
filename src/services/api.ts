import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ApiRestaurant } from '../models/ApiRestaurant'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<ApiRestaurant[], void>({
      query: () => 'restaurantes'
    }),

    getRestaurantePorId: builder.query<ApiRestaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestaurantePorIdQuery } = api