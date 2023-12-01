import { getProductInfo } from '@/api/digisellerAPI'
import { getProduct } from '@/api/cmsAPI'
import React from 'react'
import styles from './product.module.scss'
import Link from 'next/link'
import { Button} from 'antd'
import { ProductData } from '@/interfaces/Products'
import ImageGallery from '@/components/ProductPage/imageGallery.tsx'
import { ProductInfo } from '@/interfaces/ProductInfo'



const Product = async ({params}:{params:{product:string}}) => {

     
  const product : ProductData | undefined = await getProduct(params.product)


  const productInfo : ProductInfo = await getProductInfo(product?.attributes.productID!)

console.log(productInfo)


 if(productInfo?.product?.is_available){
  return (
    <div className={styles.root}>
      <h1 className={styles.name} >{productInfo.product.name}</h1>
      <div className={styles.buy_block} >
        <div className={styles.price} >{product?.attributes.price}₽</div>
        <div className={styles.buyBtn} ><Button size='large' type='primary' ><Link href={product?.attributes.buyURL!} >Купить</Link></Button></div>
      </div>
    <div className={styles.gallery} >
      {productInfo && <ImageGallery productInfo={productInfo} />}
    </div>
    
    
     <div className={styles.info} dangerouslySetInnerHTML={{ __html: productInfo?.product?.info }} />
    </div>
  )
 } else {
  return <div className={styles.root} >
    
    <div className={styles.not_available} >Извините данный товар закончился!</div>
    </div>
 }
  
}

export default Product