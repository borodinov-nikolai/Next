import { getProductInfo } from '@/api/digisellerAPI'
import { deleteProduct, getProduct, putPrice } from '@/api/cmsAPI'
import React from 'react'
import styles from './product.module.scss'
import Link from 'next/link'
import { Button} from 'antd'
import { ProductData } from '@/interfaces/Products'
import ImageGallery from '@/components/ProductPage/imageGallery.tsx'
import { ProductInfo } from '@/interfaces/ProductInfo'
import type { Metadata } from 'next'



export async function generateMetadata(
  { params }: {params: {product: string}}
): Promise<Metadata> {
  const id = params.product
  const product = await getProduct(params.product)
  return {
    title: product?.attributes.name,
    description: "Купить " + product?.attributes.name
    
  }
}

const Product = async ({params}:{params:{product:string}}) => {
  
  
  const product : ProductData | undefined = await getProduct(params.product)
  const productInfo : ProductInfo = await getProductInfo(product?.attributes.productID!)
  const price = Math.round(productInfo?.product.prices.default.RUB)



 



    if(!productInfo?.product?.is_available) {
             deleteProduct(params.product)
    }

    if(price !== product?.attributes.price) {
             putPrice(params.product, price ) 
    }
  
  

    
    
    if(productInfo?.product?.is_available){
  return (
    <div className={styles.root}>
      <h1 className={styles.name} >{productInfo.product.name}</h1>
      <div className={styles.buy_block} >
        <div className={styles.price} >{price}₽</div>
        <div className={styles.buyBtn} ><Button size='large' type='primary' ><Link href={product?.attributes.buyURL!} >Купить</Link></Button></div>
      </div>
    <div className={styles.gallery} >
      {productInfo && <ImageGallery productInfo={productInfo} />}
    </div>
    
     <div className={styles.info} dangerouslySetInnerHTML={{ __html: productInfo?.product?.info }} />
     <div className={styles.important_info} dangerouslySetInnerHTML={{ __html: productInfo?.product.add_info }}></div>
    </div>
  )
 } else {
  return <div className={styles.root} >
    
    <div className={styles.not_available} >Извините данный товар закончился!</div>
    </div>
 }
  
}

export default Product