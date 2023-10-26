'use client'
import React from 'react'
import {Input} from 'antd'
import { useAppDispatch } from '@/redux_toolkit/hooks'
import { setSearch } from '@/redux_toolkit/slices/filtersSlice'
import { useDebounce } from 'usehooks-ts'


const Search: React.FC = () => {
 const [value, setValue] = React.useState<string>('');
 const dispatch = useAppDispatch();
 const debouncedValue = useDebounce(value, 700);
 dispatch(setSearch(debouncedValue));

 

  return (
 
    <Input onChange={(e)=>setValue(e.target.value)} placeholder="поиск"/>


   
  )
}

export default Search