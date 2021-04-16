import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import carsReducer from '../features/cars/carsSlice'
import categoriesReducer from '../features/categories/categoriesSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cars: carsReducer,
    categories: categoriesReducer
  },
})
