import { configureStore } from '@reduxjs/toolkit'
import subjectReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    subject:subjectReducer,
  },
})