'use client';
import React, { useState } from 'react'
import styles from './imageGallery.module.scss'
import { Image } from 'antd'
import NextImage  from 'next/image';
import { ProductInfo } from '@/interfaces/ProductInfo'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
    productInfo: ProductInfo;
}




const ImageGallery: React.FC<Props> = ({productInfo}) => {
const [currentImage, setCurrentImage] = useState<string>()



 const defaultImage = productInfo?.product?.preview_imgs?.[1]?.url



   return (
    <div className={styles.root} >

    <div className={styles.image}> <Image  src={currentImage || defaultImage} alt={productInfo.product.name} /> </div>
     <Swiper
               slidesPerView={'auto'}
               spaceBetween={10}
               centeredSlides={false}
               slidesPerGroupSkip={4}
               grabCursor={true}
               keyboard={{
                 enabled: true,
               }}
             
             
               scrollbar={true}
               navigation={false}
               
               modules={[Keyboard, Scrollbar, Navigation, Pagination]}
               className={ [styles.swiper, "mySwiper"].join(' ')}
      > 
     
       { productInfo?.product?.preview_imgs?.slice(1).map(({id, url}:{id: number,url:string})=>{
            const previewChanged = currentImage === url ? styles.preview__changed: defaultImage === url && !currentImage ? styles.preview__changed:'';
          return (<SwiperSlide onClick={()=> setCurrentImage(url)} key={id} 
      
          className={[styles.preview, previewChanged].filter(Boolean).join(' ')} >
              <NextImage  src={url} height={200} width={400} quality={70} alt={productInfo.product.name +' preview'}></NextImage> 
          </SwiperSlide>)
        })
       }
      
       </Swiper>
     </div> 
    // </div>  
  )
}

export default ImageGallery