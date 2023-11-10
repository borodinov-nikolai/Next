import React from 'react';
import { Carousel} from 'antd';
import { getCarousel } from '@/http/cmsAPI';
import Image from 'next/image';
import styles from './carousel.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { CarouselItemData } from '@/interfaces/CarouselItems';




const Carousel_ = async () => {
  


  const carousel : CarouselItemData[] | undefined = await getCarousel(1);
  const carousel2 = await getCarousel(2);
    const image = carousel?.[0].attributes.image.data[0].attributes.url!
    const mobile_image = carousel?.[0].attributes.image.data[1].attributes.url!



 

  return (
    <Carousel prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>}  fade={true} arrows={true} autoplay={true}  className={styles.root} >
      <div className={styles.item} >
        <Link href='/catalog'>
        <div className={styles.image} >
            <Image className={styles.img_desktop} src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image} width={4000} height={4000} alt='spider man 2'></Image>
            <Image className={styles.img_mobile} src={process.env.NEXT_PUBLIC_CMS_IMG_URL+mobile_image} width={4000} height={4000} alt='spider man 2'></Image>
        </div>      
     
       <div className={styles.info} >
        <div  className={styles.info_name}>Spider-Man 2 на ваш аккаунт (PS5)</div>
        <div className={styles.info_price} > 4000 <span>₽</span>  </div>
         </div>
       </Link>
      </div>
      <div className={styles.item} >
        <Link href='/catalog'>
        <div className={styles.image} >
            <Image className={styles.img_desktop} src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image} width={4000} height={4000} alt='spider man 2'></Image>
            <Image className={styles.img_mobile} src={process.env.NEXT_PUBLIC_CMS_IMG_URL+mobile_image} width={4000} height={4000} alt='spider man 2'></Image>
        </div>      
     
       <div className={styles.info} >
        <div className={styles.info_name}>Spider-Man 2 на ваш аккаунт (PS5)</div>
        <div className={styles.info_price} > 4000 <span>₽</span>  </div>
         </div>
       </Link>
      </div>
    

    </Carousel>
  );
};

export default Carousel_;