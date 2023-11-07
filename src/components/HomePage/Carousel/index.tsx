import React from 'react';
import { Carousel} from 'antd';
import { getCarousel } from '@/http/serverApi';
import Image from 'next/image';
import styles from './carousel.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel_ = async () => {
  


  const carousel = await getCarousel(1);
  const carousel2 = await getCarousel(2);
    const image = carousel?.data.attributes.image.data[0].attributes.url
    const mobile_image = carousel?.data.attributes.image.data[1].attributes.url

  console.log(carousel?.data.attributes?.image.data[0].attributes.url)


  const right = <div>right</div>

  return (
    <Carousel prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>}  fade={true} arrows={true} autoplay={true}  className={styles.root} >
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