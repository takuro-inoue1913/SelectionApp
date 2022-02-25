import React from 'react'

type TopTitleProps = {
  title: string
}

export const TopTitle: React.FC<TopTitleProps> = ({ title }) => (
  <div style={topTitleStyle}>
    <p style={textStyle}>{title}</p>
  </div>
)

const topTitleStyle: React.CSSProperties = {
  width: '100%',
}

const textStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  color: '#37352f',
  padding: '12px 0',
  margin: '0 auto',
  textAlign: 'center',
}
