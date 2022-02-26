import React, { useEffect } from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from 'recharts'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  initialAddGraphDataList,
  addGraphDataList,
  addPrefList,
} from '../slices/populationConfigurationSlice'
import { getPopulationComposition } from '../api/resas'
import { randomColorGenerate } from '../helpers/prefectures'

export const LineGraph: React.FC = () => {
  const { prefCode, populationConfiguration } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const createGraphData = (
    response: PopulationComposition.TotalPopulation[]
  ) => {
    // 折れ線グラフ表示用のデータを作成
    dispatch(
      addPrefList({
        prefName: prefCode.currentName,
        // グラフの折れ線の色をランダムに生成
        color: randomColorGenerate(),
      })
    )
    response.forEach((i) => {
      if (populationConfiguration.graphDataList.length === 0) {
        dispatch(
          initialAddGraphDataList({
            year: i.year,
            [`${prefCode.currentName}`]: i.value,
          })
        )
      } else {
        dispatch(
          addGraphDataList({
            year: i.year,
            key: prefCode.currentName,
            value: i.value,
          })
        )
      }
    })
  }

  useEffect(() => {
    if (prefCode.currentCode) {
      ;(async () => {
        const response = await getPopulationComposition(prefCode.currentCode)
        if (!response) {
          return
        }
        createGraphData(response)
      })()
    }
  }, [prefCode.currentCode])

  return (
    <div style={ContainerStyle}>
      <LineChart
        width={700}
        height={400}
        data={populationConfiguration.graphDataList}
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
        {populationConfiguration.prefList.map((sub) => (
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
