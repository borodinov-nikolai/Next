'use client';
import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ProductData } from '@/interfaces/Products'


interface Props {
  product: ProductData;
  size?: "medium" | "large";
  imageResolution?: {
    width: number,
    height: number
  }
}


const ProductCard: React.FC<Props> = ({product, size='medium', imageResolution}) => {
  
const cmsURL =  process.env.NEXT_PUBLIC_CMS_IMG_URL
const imageURL = product?.attributes?.image?.data?.attributes?.url


  return (
    <div className={[styles.root, styles[size]].join(' ')}>
   
      <Link href={`/catalog/${product?.id}`}>
      <div className={styles.image}>
       { imageURL && <Image src={cmsURL + imageURL}
        width={imageResolution?.width || 400} height={imageResolution?.height || 400} quality={80} alt={product?.attributes.name}></Image>}
      </div>
  

       <div className={styles.price} >{product?.attributes.price || undefined} <span>₽</span></div>
      
        </Link>
    
     
    </div>
  )


  
  
  
 
}

export default ProductCard