'use client'
import { useAppSelector } from '@/redux_toolkit/hooks'
import { useRouter } from 'next/navigation';
import React from 'react';
import qs from 'qs';

const QueryBuilder = () => {
    const filters = useAppSelector((state)=> state.filters);
    const router = useRouter();


React.useEffect(()=>{

    

        const query = qs.stringify({
            filters: {
                genres: {
                    name: filters.genre || undefined
                    },
                // platform: {
                //     name: 'Xbox Series X'
                // }
                }
            }
        )

      

    router.replace(`?${query}&platform[name]=Xbox Series X`)
    


}, [filters])


  return (
   <></>
  )
}

export default QueryBuilder