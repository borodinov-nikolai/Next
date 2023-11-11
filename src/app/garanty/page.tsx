import React from 'react'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from '@/lib/getQueryClient'

import Products from '@/components/products'
import {getProductTest } from '@/http/cmsAPI'
import { Product, ProductData } from '@/interfaces/Products'




const Garanty = async () => {



  const queryClient = getQueryClient()
  await queryClient.fetchQuery<ProductData>(['product'], getProductTest )
  const dehydratedState = dehydrate(queryClient)


  return (
    <Hydrate state={dehydratedState}>
    <Products />
    </Hydrate> 
    )
}

export default Garanty