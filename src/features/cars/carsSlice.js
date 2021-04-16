import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', name: 'VW Golf 8', horsepower: 110, price: 23540, category: 1},
    {id: '2', name: 'Hyundai i30', horsepower: 110, price: 19990, category: 1},
    {id: '3', name: 'Ford Focus', horsepower: 125, price: 23400, category: 1}
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
        },
        carsUpdated(state, action) {
            const newState = state.filter(car => car.id !== action.payload.id)
            newState.push(action.payload)
            return newState
        },
        clearCategory(state, action) {
            const newState = state
            newState.forEach(car => {
                if(car.category === action.payload.categoryId){
                    car.category = 0
                }
            })
            return newState
        }
    }
})

export const { carsAdded, carsRemoved, carsUpdated, clearCategory } = carsSlice.actions

export default carsSlice.reducer