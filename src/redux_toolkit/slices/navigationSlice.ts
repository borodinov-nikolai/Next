import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




interface NavigationState {
    headerNavItem: string,
   
}


const initialState: NavigationState = {
    headerNavItem: '',
   
}


export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
       setHeaderNavItem: (state, action: PayloadAction<string>)=> {
        state. headerNavItem = action.payload
        },
   
    }
})


export const { setHeaderNavItem} = navigationSlice.actions
export default navigationSlice.reducer