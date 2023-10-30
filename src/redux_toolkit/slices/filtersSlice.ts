import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { platform } from 'os'




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
       resetFilters: (state)=> {
        state.genre = 'Все';
        state.platform = 'Все';
        state.sortValue = 'price:asc'
      
       }
    }
})


export const { setGenre, setPlatform, setSearch, setSort, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer