import {configureStore} from '@reduxjs/toolkit'
import filters from './slices/filtersSlice'
import navigation from './slices/navigationSlice'
import pagination from './slices/paginationSlice'

export const store = configureStore({
    reducer: {
        filters,
        navigation,
        pagination

    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch