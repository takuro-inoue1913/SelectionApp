import { createSlice } from '@reduxjs/toolkit'



export const populationConfigurationSlice = createSlice({
  name: 'populationConfiguration',
  initialState: {
    graphDataList: [] as {[key: string]: number}[],
    prefList: [] as {prefName: string, color: string}[],
  },
  
  reducers: {
    initialAddGraphDataList: (state, action: {payload:{[key: string]: number}}) => {
      state.graphDataList.push(action.payload)}
    ,
    addGraphDataList: (state, action: {payload:{key: string, value: number, year: number}}) => {
      state.graphDataList.forEach((data) => { 
        if(data.year === action.payload.year){
          data[action.payload.key] = action.payload.value 
        }
      })
    }
    ,
    addPrefList: (state, action: {payload:{prefName: string, color: string}}) => {
      state.prefList.push(action.payload)}
    ,
    removeGraphDataList: (state, action: {payload: {key: string}}) => {
      state.graphDataList.forEach((data) => { 
        delete data[action.payload.key]
      })
    },
    removePrefList: (state, action: {payload: {prefName: string}}) => {
      state.prefList = state.prefList.filter(i => i.prefName !== action.payload.prefName)
    },
    clearGraphDataList: (state) => {
      state.graphDataList = []
    },
    clearPrefList: (state) => {
      state.prefList = []
    },
  },
})

export const { initialAddGraphDataList, addGraphDataList, addPrefList, removeGraphDataList,  removePrefList, clearGraphDataList, clearPrefList } = populationConfigurationSlice.actions

export default populationConfigurationSlice.reducer