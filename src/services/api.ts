import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../types'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
