import {configureStore} from '@reduxjs/toolkit'
import filters from './slices/filtersSlice'
import navigation from './slices/navigationSlice'

export const store = configureStore({
    reducer: {
        filters,
        navigation

    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch