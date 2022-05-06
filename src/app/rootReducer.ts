import { combineReducers } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'

const rootReducer = combineReducers({
    todos: todoReducer,
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
