import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




interface NavigationState {
    headerNavItem: string,
   
}


const initialState: NavigationState = {
    headerNavItem: 'Главная',
   
}


export const NavigationSlice = createSlice({
    name: 'Navigation',
    initialState,
    reducers: {
       setHeaderNavItem: (state, action: PayloadAction<string>)=> {
        state. headerNavItem = action.payload
        },
   
    }
})


export const { setHeaderNavItem} = NavigationSlice.actions
export default NavigationSlice.reducer