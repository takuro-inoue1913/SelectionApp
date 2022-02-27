import React, { useCallback } from 'react'
import { useGetPrefecturesQuery } from '../api/resas'
import { useAppDispatch } from '../app/hooks'
import {
  removeGraphDataList,
  removePrefList,
} from '../slices/totalPopulationSlice'
import { setPrefState, clearPrefState } from '../slices/prefStateSlice'

export const Prefectures: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data: prefectures, error: getPrefecturesError } =
    useGetPrefecturesQuery()

  /**
   * 都道府県チェックボックスハンドリング用
   */
  const changePrefCodeList = useCallback(
    (checked: boolean, currentCode: number, currentName: string) => {
      if (checked) {
        dispatch(setPrefState({ currentCode, currentName }))
      } else {
        dispatch(clearPrefState())
        dispatch(removePrefList({ prefName: currentName }))
        dispatch(removeGraphDataList({ key: currentName }))
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
                  changePrefCodeList(
                    event.target.checked,
                    prefecture.prefCode,
                    prefecture.prefName
                  )
                }
              />
              {prefecture.prefName}
            </label>
          ))}
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
  textAlign: 'center',
}

const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '25%',
  marginBottom: 12,
  textAlign: 'center',
}
