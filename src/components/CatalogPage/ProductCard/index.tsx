import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ProductsData } from '@/interfaces/Products'


interface Props {
  product: ProductsData;
}


const ProductCard: React.FC<Props> = async ({product}) => {
  




  return (
    <div className={styles.root}>
   
      <Link href={`/catalog/${product?.id}`}>
      <div className={styles.image}>
       <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+product?.attributes?.image?.data?.[0].attributes?.url}
        width={200} height={280} quality={80} alt={product?.attributes.name}></Image>
      </div>
  
      <div className={styles.btn}>
       <div className={styles.price} >{product?.attributes.price} <span>₽</span></div>
        </div>
        </Link>
    
     
    </div>
  )


  
  
  
 
}

export default ProductCard