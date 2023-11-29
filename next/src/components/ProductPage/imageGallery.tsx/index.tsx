'use client';
import React, { useEffect, useState } from 'react'
import styles from './imageGallery.module.scss'
import { Image } from 'antd'
import NextImage  from 'next/image';
import { ProductInfo } from '@/interfaces/ProductInfo'


interface Props {
    productInfo: ProductInfo;
}


const ImageGallery: React.FC<Props> = ({productInfo}) => {
const [currentImage, setCurrentImage] = useState<string>()

console.log(productInfo)

 const defaultImage = productInfo?.product?.preview_imgs?.[1]?.url



   return (
    <div className={styles.root} >

    <div className={styles.image}> <Image  src={currentImage || defaultImage}/> </div>
     <div className={styles.previewsHolder}>
       { productInfo?.product?.preview_imgs?.slice(1).map(({id, url}:{id: number,url:string})=>{
            const previewChanged = currentImage === url ? styles.preview__changed: defaultImage === url && !currentImage ? styles.preview__changed:'';
          return (<div onClick={()=> setCurrentImage(url)} key={id} 
      
          className={[styles.preview, previewChanged].filter(Boolean).join(' ')}>
              <NextImage  src={url} height={200} width={400} quality={70} alt='preview'></NextImage>
          </div>)
        })
       }
     </div> 
     </div>
  )
}

export default ImageGallery