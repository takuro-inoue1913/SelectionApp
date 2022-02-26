import { createSlice } from '@reduxjs/toolkit'

export const prefCode = createSlice({
  name: 'prefCode',
  initialState: {
    list: [] as number[],
  },
  
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload as number)
    },
    remove: (state, action) => {
      state.list = state.list.filter(code => code !== action.payload as number)
    },
    clear: (state) => {
      state.list = []
    },
  },
})

export const { add, remove, clear } = prefCode.actions

export default prefCode.reducer