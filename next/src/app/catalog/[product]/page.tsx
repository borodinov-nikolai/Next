import { getProductInfo } from '@/http/digisellerAPI'
import { getProduct } from '@/http/cmsAPI'
import Image from 'next/image'
import React from 'react'
import styles from './product.module.scss'
import Link from 'next/link'
import { Button } from 'antd'
import { ProductData } from '@/interfaces/Products'




const Product = async ({params}:{params:{product:string}}) => {

     
  const product : ProductData | undefined = await getProduct(params.product)


  const productInfo = await getProductInfo(product?.attributes.productID!)



 if(productInfo?.product?.is_available){
  return (
    <div className={styles.root}>
      <h1 className={styles.name} >{product?.attributes.name}</h1>
      <div className={styles.buyBtn} ><Button size='large' type='primary' ><Link href={product?.attributes.buyURL!} >Купить</Link></Button></div>
    
      
         <div className={styles.gallery}>
<></>
           {
             productInfo?.product?.preview_imgs && productInfo?.product?.preview_imgs?.slice(1).map( async ({id, url}:{id: number,url:string})=>{
              return (<div className={styles.image_holder}>
                <Image key={id} src={url} height={200} width={400} quality={70} alt='preview'></Image>
              </div>)
            })
           }

         </div>
    
    
     <div className={styles.info} dangerouslySetInnerHTML={{ __html: productInfo?.product?.info }} />
    </div>
  )
 } else {
  return <div>товар закончился</div>
 }
  
}

export default Product