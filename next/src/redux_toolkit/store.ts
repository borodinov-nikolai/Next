import {configureStore} from '@reduxjs/toolkit'
import filters from './slices/filtersSlice'


export const store = configureStore({
    reducer: {
        filters

    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch