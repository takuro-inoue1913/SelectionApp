import React from 'react'
import { useQueryPrefectures } from '../api/resas'

export const Prefectures: React.FC = () => {
  const { data: prefectures, error: getPrefecturesError } =
    useQueryPrefectures()

  if (getPrefecturesError) {
    return <p>{getPrefecturesError.message}</p>
  }

  return (
    <div style={ContainerStyle}>
      <p style={titleTextStyle}>都道府県</p>
      <div>
        {prefectures &&
          prefectures.result.map((prefecture) => (
            <label htmlFor={prefecture.prefName} style={labelStyle}>
              <input type="checkbox" name={prefecture.prefName} />
              {prefecture.prefName}
            </label>
          ))}
      </div>
    </div>
  )
}

const ContainerStyle: React.CSSProperties = {
  padding: '24px 12px',
}

const titleTextStyle: React.CSSProperties = {
  fontSize: 12,
  marginBottom: 12,
}

const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '25%',
  marginBottom: 12,
}
