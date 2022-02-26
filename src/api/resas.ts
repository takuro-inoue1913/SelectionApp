import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from './axios'

// 値が長期間変化しないものはcreateApiを使用します
export const resasApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opendata.resas-portal.go.jp/api/v1/',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.REACT_APP_RESAS_API_KEY as string)
      return headers
    }}),
  endpoints: (builder) => ({
    getPrefectures: builder.query<ResasApi.GetPrefecturesResponse, void>({
      query: () => `prefectures`,
    })
  }),
})

export const { useGetPrefecturesQuery } = resasApi

// 頻繁にリクエストするAPIに関してはaxiosを使用します
export const getTotalPopulation = async (prefCode: number) => 
  axios.get<ResasApi.GetPopulationCompositionResponse>(`/population/composition/perYear`, { params: { prefCode }, headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY as string } })
  .then(res => {
    const result = res.data.result.data.filter(d => d.label === '総人口')

    return result[0].data
  })
