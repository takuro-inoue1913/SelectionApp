import React, { useEffect } from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from 'recharts'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  initialAddGraphDataList,
  addGraphDataList,
  addPrefList,
} from '../slices/totalPopulationSlice'
import { getTotalPopulation } from '../api/resas'
import { randomColorGenerate } from '../helpers/prefectures'

export const LineGraph: React.FC = () => {
  const { prefState, totalPopulation } = useAppSelector((state) => state)
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
        const response = await getTotalPopulation(prefState.currentCode)
        if (!response) {
          return
        }
        createGraphData(response)
      })()
    }
  }, [prefState.currentCode])

  return (
    <div style={ContainerStyle}>
      <LineChart
        width={700}
        height={400}
        data={totalPopulation.graphDataList}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Legend
          verticalAlign="middle"
          align="right"
          height={36}
          layout="vertical"
        />
        <XAxis
          dataKey="year"
          label={{
            value: '年度',
            position: 'insideBottomRight',
            offset: -3,
          }}
        />
        <YAxis
          label={{
            value: '人口数',
            position: 'insideTopLeft',
            offset: -20,
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
    </div>
  )
}

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
}
