import { getProductInfo } from '@/http/digisellerAPI'
import { getProduct } from '@/http/serverApi'
import Image from 'next/image'
import React from 'react'
import styles from './product.module.scss'


const Product = async ({params}:{params:{product:string}}) => {


  const product = await getProduct(params.product)
  const producrInfo = await getProductInfo(product.attributes.productID)
   console.log(producrInfo.product)



  return (
    <div className={styles.root}>
     {
      producrInfo?.product?.preview_imgs?.slice(0).map(({id, url}:{id: number,url:string})=>{
        return <Image key={id} src={url} height={1200} width={1200} alt='preview'></Image>
      })
     }
     <div dangerouslySetInnerHTML={{ __html: producrInfo.product.info }} />
    </div>
  )
}

export default Product