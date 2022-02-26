import { createSlice } from '@reduxjs/toolkit'

export const prefCodeSlice = createSlice({
  name: 'prefCode',
  initialState: {
    list: [] as number[],
    currentCode: 0,
    currentName: '',
  },
  
  reducers: {
    add: (state, action: {payload: {currentCode: number, currentName: string}}) => {
      state.list.push(action.payload.currentCode)
      state.currentCode = action.payload.currentCode
      state.currentName = action.payload.currentName
    },
    remove: (state, action: {payload: {currentCode: number}}) => {
      state.currentCode = 0
      state.list = state.list.filter(code => code !== action.payload.currentCode)
    },
    clear: (state) => {
      state.currentCode = 0
      state.currentName = ''
      state.list = []
    },
  },
})

export const { add, remove, clear } = prefCodeSlice.actions

export default prefCodeSlice.reducer