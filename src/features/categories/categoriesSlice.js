import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', name: 'Hatchback'},
    {id: '2', name: 'SUV'},
    {id: '3', name: 'Sportscar'}
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoriesAdded(state, action) {
            state.push(action.payload)
        },
        categoriesUpdated(state, action) {
            const newState = state.filter(category => category.id !== action.payload.id)
            newState.push(action.payload)
            return newState
        },
        categoriesRemoved(state, action) {
            return state.filter(category => category.id !== action.payload.id)
        }
    }
})

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } = categoriesSlice.actions

export default categoriesSlice.reducer