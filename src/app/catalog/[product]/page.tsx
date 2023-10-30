import { getProductInfo } from '@/http/digisellerAPI'
import { getProduct } from '@/http/serverApi'
import Image from 'next/image'
import React from 'react'
import styles from './product.module.scss'
import Link from 'next/link'


const Product = async ({params}:{params:{product:string}}) => {


  const product = await getProduct(params.product)
  const productInfo = await getProductInfo(product.attributes.productID)




  return (
    <div className={styles.root}>
      <button><Link href={product.attributes.buyURL} >Купить</Link></button>
     {
      productInfo?.product?.preview_imgs?.slice(0).map( async ({id, url}:{id: number,url:string})=>{
    
        return <Image key={id} src={url} height={1200} width={1200} alt='preview'></Image>
      })
     }
     <div dangerouslySetInnerHTML={{ __html: productInfo.product.info }} />
    </div>
  )
}

export default Product