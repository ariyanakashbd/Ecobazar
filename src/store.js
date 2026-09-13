import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/slicesCounter'

export const store = configureStore({
  reducer: {
     counter: counterSlice
  },
})