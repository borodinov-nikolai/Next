import React from 'react';
import { Carousel} from 'antd';
import { getCarousel } from '@/http/serverApi';
import Image from 'next/image';
import styles from './carousel.module.scss'


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel_ = async () => {
  


  const carousel = await getCarousel();
    const image = carousel.data.attributes.image.data[0].attributes.url
  console.log(carousel.data.attributes.image.data[0].attributes.url)

  return (
    <Carousel fade={true}  autoplay={true} arrows={true} className={styles.root} >
      <div className={styles.item} >
        <div className={styles.image} >
            <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image} width={4000} height={4000} alt='spider man 2'></Image>
        </div>      
     
       <div className={styles.text} > Spider-Man 2</div>
      </div>
      <div className={styles.item}>
      <div className={styles.image} >
            <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image} width={4000} height={4000} alt='spider man 2'></Image>
        </div>      
      </div>
      <div className={styles.item}>
      <div className={styles.image} >
            <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image} width={4000} height={4000} alt='spider man 2'></Image>
        </div>      
      </div>
      <div className={styles.item}>
      <div className={styles.image} >
            <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image} width={4000} height={4000} alt='spider man 2'></Image>
        </div>      
      </div>
    </Carousel>
  );
};

export default Carousel_;