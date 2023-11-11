'use client'

import {getProductTest} from '@/http/cmsAPI'
import { useQuery } from '@tanstack/react-query'
import React from 'react'



const Products = () => {
  // const [data, setData] = useState()

  const { data, isLoading } = useQuery({ queryKey: ['product'], queryFn: getProductTest })
  
  
  
  // React.useEffect(()=> {
    
    
  //   const getProductTest = async ()=> {
  //     const {data} = await axios.get('http://localhost:1337/api/products/1');
  //     setData(data.data)
  //   }

   
  
    
    
  //   getProductTest()
    
  // },[])
  

  // console.log(data)
 

  return (
    <div className='battlefield' >{data?.attributes?.name}</div>
  )
}

export default Products