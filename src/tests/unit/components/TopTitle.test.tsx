import React from 'react'
import { shallow } from 'enzyme'
import { TopTitle } from '../../../components/TopTitle'

describe('TopTitle Component Test', () => {
  test('titleが正常に表示されるか', () => {
    const wrapper = shallow(<TopTitle title="都道県別総人口図表" />)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.find('p').text()).toBe('都道県別総人口図表')
  })
})
