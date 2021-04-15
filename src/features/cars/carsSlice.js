import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', name: 'VW Golf 8', horsepower: 110, price: 23540, category: 'sedan'},
    {id: '2', name: 'Hyundai i30', horsepower: 110, price: 19990, category: 'sedan'},
    {id: '3', name: 'Ford Focus', horsepower: 125, price: 23400, category: 'sedan'}
]

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        carsAdded(state, action) {
            state.push(action.payload)
        },
        carsRemoved(state, action) {
            return state.filter(car => car.id !== action.payload.id)
        }
    }
})

export const { carsAdded, carsRemoved } = carsSlice.actions

export default carsSlice.reducer