import React from 'react';
import { Carousel} from 'antd';
import Image from 'next/image';
import styles from './carousel.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { CarouselItemData } from '@/interfaces/CarouselItems';


interface Props {
  data: CarouselItemData[] | undefined
}


const Carousel_: React.FC<Props> = async ({data}) => {
   

  return (
    data && 
    
    <  Carousel prevArrow={<LeftOutlined />} nextArrow={<RightOutlined/>}  fade={true} arrows={true} autoplay={true}  className={styles.root} >
    { data.map((item)=> {
      const attributes = item.attributes
      return (
        <div className={styles.item} >
        <Link href='/catalog'>
        <div className={styles.image} >
            <Image className={styles.img_desktop} src={process.env.NEXT_PUBLIC_CMS_IMG_URL+ attributes.desktop_image.data.attributes.url} width={4000} height={4000} alt={attributes.title}></Image>
            <Image className={styles.img_mobile} src={process.env.NEXT_PUBLIC_CMS_IMG_URL+ attributes.mobile_image.data.attributes.url} width={4000} height={4000} alt={attributes.title}></Image>
        </div>      
     
       <div className={styles.info} >
        <div  className={styles.info_name}>{attributes.title}</div>
        <div className={styles.info_price} > {attributes.price} <span>₽</span>  </div>
         </div>
       </Link>
      </div>
      )
     }) 
    }
     
    </Carousel>
  );
};

export default Carousel_;