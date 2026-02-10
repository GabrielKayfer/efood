import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ApiRestaurant } from '../models/ApiRestaurant'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
      receiver: string
      address: {
          description: string
          city: string
          zipCode: string
          number: number
          complement?: string
              }
            },
      payment:  {
          card: {
              name: string
              number: string
              code: number
              expires: {
                  month: number
                  year: number
                      }
                }
                }
              }

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<ApiRestaurant[], void>({
      query: () => 'restaurantes',
      
    }),

    getRestaurantePorId: builder.query<ApiRestaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      })
    }),
  })
})

export const { useGetRestaurantesQuery, useGetRestaurantePorIdQuery, usePurchaseMutation } = api