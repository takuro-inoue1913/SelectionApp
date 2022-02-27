import React, { useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
} from 'recharts'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  initialAddGraphDataList,
  addGraphDataList,
  addPrefList,
} from '../slices/totalPopulationSlice'
import { getTotalPopulation } from '../api/resas'
import { randomColorGenerate } from '../helpers/prefectures'
import { useMediaQueryContext } from '../context/MediaQueryProvider'

export const LineGraph: React.FC = () => {
  const { prefState, totalPopulation } = useAppSelector((state) => state)
  const { isMobileSite } = useMediaQueryContext()
  const dispatch = useAppDispatch()

  const createGraphData = (
    response: PopulationComposition.TotalPopulation[]
  ) => {
    // 折れ線グラフ表示用のデータを作成
    dispatch(
      addPrefList({
        prefName: prefState.currentName,
        // グラフの折れ線の色をランダムに生成
        color: randomColorGenerate(),
      })
    )
    response.forEach((i) => {
      if (totalPopulation.graphDataList.length === 0) {
        // graphDataListのデータがない場合新しく追加
        dispatch(
          initialAddGraphDataList({
            year: i.year,
            [`${prefState.currentName}`]: i.value,
          })
        )
      } else {
        // graphDataListのデータがある場合、都道府県のプロパティを配列に追加
        dispatch(
          addGraphDataList({
            year: i.year,
            key: prefState.currentName,
            value: i.value,
          })
        )
      }
    })
  }

  useEffect(() => {
    if (prefState.currentCode) {
      ;(async () => {
        const isExistsName = totalPopulation.prefList.some(
          (i) => i.prefName === prefState.currentName
        )
        // 都道府県がすでにリストに存在している場合は何もしない
        if (isExistsName) {
          return
        }
        const response = await getTotalPopulation(prefState.currentCode)
        // データ取得失敗時は何もしない
        if (!response) {
          return
        }
        createGraphData(response)
      })()
    }
  }, [prefState.currentCode])

  return (
    <div style={ContainerStyle}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={700}
          height={400}
          data={totalPopulation.graphDataList}
          margin={{
            top: 30,
            right: isMobileSite ? 20 : 100,
            left: isMobileSite ? 50 : 100,
            bottom: 50,
          }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Legend
            verticalAlign={isMobileSite ? 'bottom' : 'top'}
            align="right"
            height={10}
            layout={isMobileSite ? 'horizontal' : 'vertical'}
            wrapperStyle={{
              fontSize: '10px',
              marginRight: isMobileSite ? 0 : -15,
            }}
          />
          <XAxis
            dataKey="year"
            fontSize={isMobileSite ? 8 : 10}
            label={{
              value: '年度',
              position: 'insideBottomRight',
              offset: isMobileSite ? 4 : -3,
              fontSize: 10,
            }}
          />
          <YAxis
            width={3}
            fontSize={isMobileSite ? 8 : 10}
            label={{
              value: '人口数',
              position: 'insideTopLeft',
              offset: -20,
              fontSize: 10,
            }}
          />
          {totalPopulation.prefList.map((sub) => (
            <Line
              key={sub.prefName}
              name={sub.prefName}
              type="monotone"
              dataKey={sub.prefName}
              stroke={sub.color}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
}
