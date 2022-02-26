import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Prefectures } from './components/Prefectures'
import { TopTitle } from './components/TopTitle'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 30000,
    },
  },
})

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <main>
      <section style={topTitleSectionStyle}>
        <TopTitle title="Title" />
      </section>
      <section>
        <Prefectures />
      </section>
    </main>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

const topTitleSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#C4C4C4',
}
