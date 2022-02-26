import { createSlice } from '@reduxjs/toolkit'

export const prefStateSlice = createSlice({
  name: 'prefState',
  initialState: {
    currentCode: 0,
    currentName: '',
  },
  
  reducers: {
    setPrefState: (state, action: {payload: {currentCode: number, currentName: string}}) => {
      state.currentCode = action.payload.currentCode
      state.currentName = action.payload.currentName
    },
    clearPrefState: (state) => {
      state.currentCode = 0
      state.currentName = ''
    },
  },
})

export const { setPrefState, clearPrefState } = prefStateSlice.actions

export default prefStateSlice.reducer