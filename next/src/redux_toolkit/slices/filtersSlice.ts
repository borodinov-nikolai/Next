import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




interface FiltersState {
    genre: string,
    platform: string,
    searchValue: string,
    sortValue: string
}


const initialState: FiltersState = {
    genre: '',
    platform: '',
    searchValue: '',
    sortValue: ''
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
       setSearch: (state, action: PayloadAction<string>)=> {
        state.searchValue = action.payload
        },
       setSort: (state, action: PayloadAction<string>)=> {
        state.sortValue = action.payload
        },
    }
})


export const { setGenre, setPlatform, setSearch, setSort } = filtersSlice.actions
export default filtersSlice.reducer