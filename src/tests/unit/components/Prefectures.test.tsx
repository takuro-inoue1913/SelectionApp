import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import { Prefectures } from '../../../components/Prefectures'

describe('Prefectures Component Test', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <Prefectures />
      </Provider>
    )
  test('都道府県一覧が全て表示できている', async () => {
    setup()
    await screen.findByText('北海道')
    await screen.findByText('青森県')
    await screen.findByText('岩手県')
    await screen.findByText('宮城県')
    await screen.findByText('秋田県')
    await screen.findByText('山形県')
    await screen.findByText('福島県')
    await screen.findByText('茨城県')
    await screen.findByText('栃木県')
    await screen.findByText('群馬県')
    await screen.findByText('埼玉県')
    await screen.findByText('千葉県')
    await screen.findByText('東京都')
    await screen.findByText('神奈川県')
    await screen.findByText('新潟県')
    await screen.findByText('富山県')
    await screen.findByText('石川県')
    await screen.findByText('福井県')
    await screen.findByText('山梨県')
    await screen.findByText('長野県')
    await screen.findByText('岐阜県')
    await screen.findByText('静岡県')
    await screen.findByText('愛知県')
    await screen.findByText('三重県')
    await screen.findByText('滋賀県')
    await screen.findByText('京都府')
    await screen.findByText('大阪府')
    await screen.findByText('兵庫県')
    await screen.findByText('奈良県')
    await screen.findByText('和歌山県')
    await screen.findByText('鳥取県')
    await screen.findByText('島根県')
    await screen.findByText('岡山県')
    await screen.findByText('広島県')
    await screen.findByText('山口県')
    await screen.findByText('徳島県')
    await screen.findByText('香川県')
    await screen.findByText('愛媛県')
    await screen.findByText('高知県')
    await screen.findByText('福岡県')
    await screen.findByText('佐賀県')
    await screen.findByText('長崎県')
    await screen.findByText('熊本県')
    await screen.findByText('大分県')
    await screen.findByText('宮崎県')
    await screen.findByText('鹿児島県')
    await screen.findByText('沖縄県')
  })

  test('初期のチェックボックスはチェックされていないか', () => {
    setup()
    let checkbox: HTMLInputElement

    checkbox = screen.getByLabelText('北海道')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('青森県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('岩手県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('宮城県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('秋田県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('山形県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('福島県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('茨城県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('栃木県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('群馬県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('埼玉県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('千葉県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('東京都')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('神奈川県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('新潟県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('富山県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('石川県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('福井県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('山梨県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('長野県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('岐阜県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('静岡県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('愛知県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('三重県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('滋賀県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('京都府')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('大阪府')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('兵庫県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('奈良県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('和歌山県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('鳥取県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('島根県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('岡山県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('広島県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('山口県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('徳島県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('香川県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('愛媛県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('高知県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('福岡県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('佐賀県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('長崎県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('熊本県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('大分県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('宮崎県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('鹿児島県')
    expect(checkbox.checked).toBe(false)

    checkbox = screen.getByLabelText('沖縄県')
    expect(checkbox.checked).toBe(false)
  })
})
