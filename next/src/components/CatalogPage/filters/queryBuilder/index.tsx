'use client'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks'
import { useRouter } from 'next/navigation';
import React from 'react';
import qs from 'qs';
import { resetFilters } from '@/redux_toolkit/slices/filtersSlice';


interface Props {
defaultValues:{
    sort: string[] | undefined,
    filters: {
      genres: { name: string | undefined } | undefined,
      platform: { name: string |undefined } | undefined,
      name: { [key:string]:string | undefined } | undefined
    } | undefined
  } | undefined

}


const QueryBuilder: React.FC<Props> = ({defaultValues}) => {
    const filters = useAppSelector((state)=> state.filters);
  const dispatch = useAppDispatch()
    const router = useRouter();


    React.useEffect(()=> {

        return ()=> {dispatch(resetFilters())}

    },[])
  


React.useEffect(()=>{
   

        const query = qs.stringify({

            sort: [filters.sortValue || defaultValues?.sort?.[0] || 'price:asc'],

            filters: {
                genres: {
                    name: filters.genre || defaultValues?.filters?.genres?.name|| undefined
                    },
                platform: {
                    name: filters.platform || defaultValues?.filters?.platform?.name || undefined
                },
                name: {
                    $containsi: filters.searchValue || undefined
                }
                }
              
            }
        )

        
        
        router.replace(`?${query}`)
        
        
      

}, [filters])


  return (
   <></>
  )
}

export default QueryBuilder