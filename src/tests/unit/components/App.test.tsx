import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../../../App'

// enzymeから読み込んだshallowを使う例
const wrapper = shallow(<App />)
describe('App Component Test', () => {
  test('子コンポーネントが存在する', () => {
    expect(wrapper.find('TopTitle').length).toBe(1)
    expect(wrapper.find('Prefectures').length).toBe(1)
    expect(wrapper.find('LineGraph').length).toBe(1)
  })
})
