import { configureStore } from '@reduxjs/toolkit'
import { resasApi } from '../api/resas'
import prefCodeReducer from '../slices/prefCodeSlice'

export const store = configureStore({
  reducer: {
    [resasApi.reducerPath]: resasApi.reducer,
    prefCode: prefCodeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resasApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;