import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




interface Pagination {
    page: number | null,
    pageSize: number
}



const initialState : Pagination = {
    page: null,
    pageSize: 24
}



export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number|null>)=> {
            state.page = action.payload
        } 
    }
})




export const {setPage} = paginationSlice.actions
export default paginationSlice.reducer
