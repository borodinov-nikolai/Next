import React from 'react'
import styles from './home.module.scss'
import Carousel from '@/components/HomePage/carousel'
import { CarouselItemData } from '@/interfaces/CarouselItems';
import { getCarousel, getNewProducts } from '@/http/cmsAPI';
import { Products } from '@/interfaces/Products';
import ProductsSlider from '@/components/HomePage/productsSlider';




const Home = async () => {

  const carouselItems : CarouselItemData[] | undefined = await getCarousel();
  const newProducts : Products | undefined = await getNewProducts();

  console.log()
 
 
  return (
    <div className={styles.root}>
      
   
       <div>
        {carouselItems && <Carousel data={carouselItems} />}
       </div>

       <div className={styles.new} >Горячие новинки!</div>
         { newProducts && <ProductsSlider products={ newProducts} />}

       <div className={styles.info} >
       <h1 className={styles.info_title} >Добро пожаловать на petproekt.store</h1>
        <div className={styles.info_text}>
           ваш идеальный партнер для приобретения оффлайн и онлайн активаций в сервисах Steam, Microsoft Store, Epic Games Store, Ubisoft Connect и многих других. Мы специализируемся на продаже различных цифровых товаров, включая аккаунты, лицензионные ключи для Steam, Windows и многое другое.
          
          У нас вы найдете широкий ассортимент товаров, которые помогут вам расширить вашу игровую коллекцию или обновить программное обеспечение. Мы предлагаем только официальные товары по доступным ценам, чтобы вы могли наслаждаться играми и программами без лишних затрат.
          
          Не упустите возможность приобрести качественные цифровые товары и активации по выгодным ценам.
        </div>
       </div>


    </div>
  )
}

export default Home