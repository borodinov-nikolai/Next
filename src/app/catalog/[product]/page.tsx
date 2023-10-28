import { getProductInfo } from '@/http/digisellerAPI'
import { getProduct } from '@/http/serverApi'
import React from 'react'



const Product = async ({params}:{params:{product:string}}) => {


  const product = await getProduct(params.product)
  const producrInfo = await getProductInfo(product.attributes.productID)
// console.log(product, producrInfo.product.info)

  return (
    <div>
     <div dangerouslySetInnerHTML={{ __html: producrInfo.product.info }} />
    </div>
  )
}

export default Product