import React from 'react'
import styles from './home.module.scss'
import Carousel from '@/components/HomePage/carousel'
import { CarouselItemData } from '@/interfaces/CarouselItems';
import { getCarousel, getMetaData, getNewProducts } from '@/api/cmsAPI';
import { Products } from '@/interfaces/Products';
import ProductsSlider from '@/components/HomePage/productsSlider';
import { Button } from 'antd';
import Link from 'next/link';
import { Metadata } from 'next';

export const dynamic = "force-dynamic";
 
export async function generateMetadata(): Promise<Metadata> {
  const data = await getMetaData('home')
  return {
    title: data?.attributes?.meta?.title,
    description: data?.attributes?.meta?.description
    }
}



const Home = async () => {

 

  const carouselItems : CarouselItemData[] | undefined = await getCarousel();
  const newProducts : Products | undefined = await getNewProducts();

 
 
 
  return (
    <div className={styles.root}>
      
   
       <div>
        {carouselItems && <Carousel data={carouselItems} />}
       </div>
       <div className={styles.new_title} >Новое на сайте:</div>
         <div className={styles.new_slider}>{ newProducts && <ProductsSlider products={ newProducts} />}</div>


       <div className={styles.info} >
       <h1 className={styles.info_title} >Добро пожаловать на petproekt.store</h1>
        <div className={styles.info_text}>
           Ваш идеальный партнер для приобретения оффлайн и онлайн активаций в сервисах Steam, Microsoft Store, Epic Games Store, Ubisoft Connect и многих других. Мы специализируемся на продаже различных цифровых товаров, включая аккаунты, лицензионные ключи для Steam, Windows и многое другое.
          
          У нас Вы найдете широкий ассортимент товаров, которые помогут вам расширить вашу игровую коллекцию или обновить программное обеспечение. Мы предлагаем только официальные товары по доступным ценам, чтобы Вы могли наслаждаться играми и программами без лишних затрат.
          
          Не упустите возможность приобрести качественные цифровые товары и активации по выгодным ценам.
        </div>
               
       </div>
    </div>
  )
}

export default Home