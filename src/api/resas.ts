import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const resasApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opendata.resas-portal.go.jp/api/v1/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.REACT_APP_RESAS_API_KEY as string)
      return headers
    }}),
  endpoints: (builder) => ({
    getPrefectures: builder.query<ResasApi.GetPrefecturesResponse, void>({
      query: () => `prefectures`,
    }),
  }),
})

export const { useGetPrefecturesQuery } = resasApi