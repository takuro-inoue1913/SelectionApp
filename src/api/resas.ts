
import { useQuery } from 'react-query'
import axios from './axios'

export async function fetchPrefectures(): Promise<ResasApi.GetPrefecturesResponse> {
  const { data } = await axios.get<ResasApi.GetPrefecturesResponse>('/prefectures')
  return data
}

export const useQueryPrefectures = () => useQuery<ResasApi.GetPrefecturesResponse, Error>({
    queryKey: 'prefectures',
    queryFn: fetchPrefectures,
    cacheTime: 10000,
    staleTime: 10000,
  })