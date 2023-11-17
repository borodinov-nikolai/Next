'use client'
import React from 'react'
import {Input} from 'antd'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { resetFilters, setSearch } from '@/redux_toolkit/slices/filtersSlice'
import { useParams } from 'next/navigation'
import { setPage } from '@/redux_toolkit/slices/paginationSlice'



const Search: React.FC = () => {
 const {searchValue} = useAppSelector((state)=> state.filters)
 const dispatch = useAppDispatch();
 
 
 const find = (e : React.ChangeEvent<HTMLInputElement>)=> {
  dispatch(resetFilters());
  dispatch(setSearch(e.target.value))
  dispatch(setPage(1))
 }

  return (
 
    <Input value={searchValue} onChange={(e)=>find(e)} placeholder="поиск"/>


   
  )
}

export default Search