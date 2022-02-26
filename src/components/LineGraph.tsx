import React from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from 'recharts'

export const LineGraph: React.FC = () => {
  const data = [
    { prefCode: 1, prefName: '北海道', year: 1960, value: 5000 },
    { prefCode: 2, prefName: '東京', year: 1965, value: 3000 },
    { prefCode: 3, prefName: '福岡', year: 1970, value: 2000 },
  ]

  return (
    <div style={ContainerStyle}>
      <LineChart
        width={700}
        height={400}
        data={data}
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
          dataKey="value"
          label={{
            value: '人口数',
            position: 'insideTopLeft',
            offset: -20,
          }}
        />
        <Line
          name="prefName"
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  )
}

const ContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
}
