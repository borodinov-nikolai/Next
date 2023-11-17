'use client';
import React, { useState } from 'react'
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
  const imageURL = product.attributes.image?.data.attributes.url
  const iconURL = product.attributes.platform?.data.attributes.icon?.data.attributes.url



  return (
    <div title={product.attributes.productName} className={[styles.root, styles[size]].join(' ')}>
     <Link href={`/catalog/${product.id}`}>
      <div className={styles.image}>
       { imageURL && <Image src={cmsURL + imageURL}
        width={imageResolution?.width || 400} height={imageResolution?.height || 400} quality={80} alt={product.attributes.name}></Image>}
      </div>
      <div className={styles.platform_icon}>
        {iconURL && <Image src={cmsURL + iconURL} height={50} width={50} alt={product.attributes.name + " icon"}/>}

      </div>
  

       <div className={styles.price} >{product?.attributes.price || undefined} <span>₽</span></div>
      
        </Link>
      
     
    </div>
  )


  
  
  
 
}

export default ProductCard