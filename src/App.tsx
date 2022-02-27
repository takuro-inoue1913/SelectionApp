import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { LineGraph } from './components/LineGraph'
import { Prefectures } from './components/Prefectures'
import { TopTitle } from './components/TopTitle'
import { MediaQueryProvider } from './context/MediaQueryProvider'

export const App: React.FC = () => (
  <Provider store={store}>
    <MediaQueryProvider>
      <main>
        <section style={topTitleSectionStyle}>
          <TopTitle title="都道県別総人口図表" />
        </section>
        <section>
          <Prefectures />
          <LineGraph />
        </section>
      </main>
    </MediaQueryProvider>
  </Provider>
)

const topTitleSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#C4C4C4',
}
