import React, { useState } from 'react'
import { Prefectures } from './components/Prefectures'
import { TopTitle } from './components/TopTitle'

export const App: React.FC = () => (
  <main>
    <section style={topTitleSectionStyle}>
      <TopTitle title="Title" />
    </section>
    <section>
      <Prefectures />
    </section>
  </main>
)

const topTitleSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#C4C4C4',
}
