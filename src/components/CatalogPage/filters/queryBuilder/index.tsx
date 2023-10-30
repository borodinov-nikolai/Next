'use client'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { useRouter } from 'next/navigation';
import React from 'react';
import qs from 'qs';
import { resetFilters } from '@/redux_toolkit/slices/filtersSlice';
import { useDebounce } from 'usehooks-ts';


interface Props {
defaultValues:{
    sort: string[] | undefined,
    filters: {
      genres: { name: string | undefined } | undefined,
      platforms: { name: string |undefined } | undefined,
      name: { [key:string]:string | undefined } | undefined
    } | undefined
  } | undefined

}


const QueryBuilder: React.FC<Props> = ({defaultValues}) => {
    const filters = useAppSelector((state)=> state.filters);
  const dispatch = useAppDispatch()
    const router = useRouter();
let debouncedSearch = useDebounce(filters.searchValue, 800);


    React.useEffect(()=> {

        if(!window.location.search) {
            dispatch(resetFilters())
        }

    },[window.location.search])
  

   

React.useEffect(()=>{
   

        const query = qs.stringify({

            sort: [filters.sortValue || defaultValues?.sort?.[0] || 'price:asc'],

            filters: {
                genres: {
                    name: filters.genre === 'Все'? undefined : (filters.genre || defaultValues?.filters?.genres?.name|| undefined)
                    },
                platforms: {
                    name: filters.platform === 'Все'? undefined : (filters.platform || defaultValues?.filters?.platforms?.name || undefined)
                },
                name: {
                    $containsi: debouncedSearch || undefined
                }
                }
              
            }
        )

        
        
        router.replace(`?${query}`)
        
        
      

}, [filters, debouncedSearch])


  return (
   <></>
  )
}

export default QueryBuilder