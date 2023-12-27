import { configureStore } from '@reduxjs/toolkit'
import gameReduser from './gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReduser,
  },
})