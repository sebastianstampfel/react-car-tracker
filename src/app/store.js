import { configureStore } from '@reduxjs/toolkit'
import carsReducer from '../features/cars/carsSlice'
import categoriesReducer from '../features/categories/categoriesSlice'


export const store = configureStore({
  reducer: {
    cars: carsReducer,
    categories: categoriesReducer
  },
})
