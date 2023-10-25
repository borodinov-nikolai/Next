import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




interface FiltersState {
    genre: string,
    platform: string
}


const initialState: FiltersState = {
    genre: '',
    platform: ''
}


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
       setGenre: (state, action: PayloadAction<string>)=> {
        state.genre = action.payload
        },
       setPlatform: (state, action: PayloadAction<string>)=> {
        state.platform = action.payload
        },
    }
})


export const { setGenre, setPlatform } = filtersSlice.actions
export default filtersSlice.reducer