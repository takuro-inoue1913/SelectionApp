import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import { LineGraph } from '../../../components/LineGraph'

describe('LineGraph Component Test', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <LineGraph />
      </Provider>
    )
  test('DOMが正常に表示されるか', () => {
    const { container } = setup()
    expect(container.innerHTML).toMatch(
      '<div style="display: flex; justify-content: center;"><div class="recharts-responsive-container" style="width: 100%; height: 400px;"></div></div>'
    )
  })
})
