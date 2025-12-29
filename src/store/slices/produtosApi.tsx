import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import  { Produto } from '../../components/Produto'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports' }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/produtos'
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
