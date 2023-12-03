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
  const attributes = product.attributes
  const imageURL = attributes.image?.data.attributes.url
  const iconURL = attributes.platform?.data.attributes.icon?.data.attributes.url
  
  
  
  return (
    <div title={attributes.productName} className={[styles.root, styles[size]].join(' ')}>
     <Link href={`/catalog/${product.id}`}>
      <div className={styles.image}>
       { imageURL && <Image loading={'eager'} src={cmsURL + imageURL}
        width={imageResolution?.width || 200} height={imageResolution?.height || 300} quality={80} alt={attributes.name}></Image>}
      </div>
      <div className={styles.platform_icon}>
        {iconURL && <Image loading={'eager'} src={cmsURL + iconURL} height={50} width={50} alt={attributes.name + " icon"}/>}

      </div>
  

       <div className={styles.price} >{attributes.price || undefined} <span>₽</span></div>
      
        </Link>
      
     
    </div>
  )


  
  
  
 
}

export default ProductCard