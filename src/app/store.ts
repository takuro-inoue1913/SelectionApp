import { configureStore } from '@reduxjs/toolkit'
import { resasApi } from '../api/resas'
import prefStateReducer from '../slices/prefStateSlice'
import totalPopulationReducer from '../slices/totalPopulationSlice'

export const store = configureStore({
  reducer: {
    [resasApi.reducerPath]: resasApi.reducer,
    prefState: prefStateReducer,
    totalPopulation: totalPopulationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resasApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
