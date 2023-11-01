'use client'
import React from 'react'
import {Input} from 'antd'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { resetFilters, setSearch } from '@/redux_toolkit/slices/filtersSlice'




const Search: React.FC = () => {
 const {searchValue} = useAppSelector((state)=> state.filters)
 const dispatch = useAppDispatch();
 
 
 const find = (e : React.ChangeEvent<HTMLInputElement>)=> {
  dispatch(resetFilters());
  dispatch(setSearch(e.target.value))
 }

  return (
 
    <Input value={searchValue} onChange={(e)=>find(e)} placeholder="поиск"/>


   
  )
}

export default Search