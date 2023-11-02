import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { getProductInfo } from '@/http/digisellerAPI'


interface Props {
  product: {
    id: number, 
      attributes: {
        name: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        buyURL: string,
        price: number
        image: {
          data: [{
            attributes: {
              url:string
            }}
          ]
        }
      }
  }
}


const ProductCard: React.FC<Props> = async ({product}) => {
  


 const productInfo = await getProductInfo(product?.attributes?.productID)


 
  



  return (
    <div className={styles.root}>
    {
      productInfo?.product?.is_available?
      <Link href={`/catalog/${product?.id}`}>
      <div className={styles.image}>
       <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+product?.attributes?.image?.data?.[0].attributes?.url}
        width={200} height={280} quality={80} alt={product?.attributes.name}></Image>
      </div>
  
      <div className={styles.btn}>
       <div className={styles.price} >{product?.attributes.price} <span>₽</span></div>
        </div>
        </Link>
        :
        <div>
          
          <div className={styles.image}>
           <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+product?.attributes?.image?.data?.[0].attributes?.url}
            width={200} height={280} quality={80} alt={product?.attributes.name}></Image>
          </div>
          <div className={styles.btn}>
           <div className={styles.price} >Товар закончился</div>
            </div>
        </div>
          
    }
     
    </div>
  )


  
  
  
 
}

export default ProductCard