import React, { useEffect, useMemo, useState } from 'react'
import { AlphabeticalOrderRange } from '../helpers/prefectures'
// type PrefecturesProps = {
//   prefectures: string[]
// }

export const Prefectures: React.FC = () => {
  const [prefectureLabels, setPrefectureLabels] = useState<string[]>([])
  useMemo(() => {
    setPrefectureLabels(AlphabeticalOrderRange('A', 'R'))
  }, [])

  return (
    <div style={ContainerStyle}>
      <p style={titleTextStyle}>都道府県</p>
      <div>
        {prefectureLabels.map((label) => (
          <label htmlFor={label} style={labelStyle} className="mycheckbox">
            <input type="checkbox" name={label} />
            {label}
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
  width: '16.6%',
}
