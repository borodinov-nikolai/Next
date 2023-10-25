import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




interface FiltersState {
    genre: string
}


const initialState: FiltersState = {
    genre: ''
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
       setGenre: (state, action: PayloadAction<string>)=> {
        state.genre = action.payload
        }
    }
})


export const { setGenre } = filtersSlice.actions
export default filtersSlice.reducer