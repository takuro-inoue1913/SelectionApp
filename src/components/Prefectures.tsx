import React, { useCallback } from 'react'
import { useGetPrefecturesQuery } from '../api/resas'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { add, remove } from '../slices/prefCodeSlice'

export const Prefectures: React.FC = () => {
  const prefCode = useAppSelector((state) => state.prefCode)
  const dispatch = useAppDispatch()
  const { data: prefectures, error: getPrefecturesError } =
    useGetPrefecturesQuery()

  /**
   * 都道府県チェックボックスハンドリング用
   */
  const changePrefCodeList = useCallback(
    (checked: boolean, code: number) => {
      if (checked) {
        dispatch(add(code))
      } else {
        dispatch(remove(code))
      }
    },
    [dispatch]
  )

  if (getPrefecturesError) {
    return <p>{getPrefecturesError}</p>
  }

  return (
    <div style={ContainerStyle}>
      <p style={titleTextStyle}>都道府県</p>
      <div>
        {prefectures &&
          prefectures.result.map((prefecture) => (
            <label
              htmlFor={prefecture.prefName}
              style={labelStyle}
              key={prefecture.prefName}
            >
              <input
                type="checkbox"
                name={prefecture.prefName}
                id={prefecture.prefName}
                onChange={(event) =>
                  changePrefCodeList(event.target.checked, prefecture.prefCode)
                }
              />
              {prefecture.prefName}
            </label>
          ))}
        {console.log(prefCode.list)}
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
  width: '25%',
  marginBottom: 12,
}
