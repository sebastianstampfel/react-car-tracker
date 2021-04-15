import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', name: 'VW Golf 8', horsepower: 110, price: 23540, type: 'sedan'},
    {id: '2', name: 'Hyundai i30', horsepower: 110, price: 19990, type: 'sedan'},
    {id: '3', name: 'Ford Focus', horsepower: 125, price: 23400, type: 'sedan'}
]

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        carsAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { carsAdded } = carsSlice.actions

export default carsSlice.reducer