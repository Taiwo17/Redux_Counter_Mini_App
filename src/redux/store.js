import { configureStore } from '@reduxjs/toolkit'
import { countReducer } from './counterSlice'

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
})
