'use client'
import React from 'react'
import {Input} from 'antd'
import { useAppDispatch } from '@/redux_toolkit/hooks'
import { resetFilters, setSearch } from '@/redux_toolkit/slices/filtersSlice'



const Search: React.FC = () => {
//  const [value, setValue] = React.useState<string>('');
 const dispatch = useAppDispatch();
// let debouncedValue = useDebounce(value, 700);
 
 
 const find = (e : React.ChangeEvent<HTMLInputElement>)=> {
  dispatch(resetFilters());
  dispatch(setSearch(e.target.value))
 }

  return (
 
    <Input onChange={(e)=>find(e)} placeholder="поиск"/>


   
  )
}

export default Search