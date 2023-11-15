import React from 'react'
import styles from './home.module.scss'
import Carousel_ from '@/components/HomePage/Carousel'
import { CarouselItemData } from '@/interfaces/CarouselItems';
import { getCarousel } from '@/http/cmsAPI';



const Home = async () => {

  const carousel : CarouselItemData[] | undefined = await getCarousel(1);
 
 
 
  return (
    <div className={styles.root}>
      
       {/* <div className={styles.title}>Добро пожаловать на petproekt.store</div>
       <div> У нас вы можете приобрести аккаунты и ключи игр</div> */}
       <div>
        <Carousel_ data={carousel} />
       </div>

       <div className={styles.new} >Горячие новинки!</div>
       <div> </div>


    </div>
  )
}

export default Home