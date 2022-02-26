import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Prefectures } from './components/Prefectures'
import { TopTitle } from './components/TopTitle'

export const App: React.FC = () => (
  <Provider store={store}>
    <main>
      <section style={topTitleSectionStyle}>
        <TopTitle title="Title" />
      </section>
      <section>
        <Prefectures />
      </section>
    </main>
  </Provider>
)

const topTitleSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#C4C4C4',
}
