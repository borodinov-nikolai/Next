import React from 'react'
import styles from './home.module.scss'
import Carousel from '@/components/HomePage/Carousel'
import { CarouselItemData } from '@/interfaces/CarouselItems';
import { getCarousel } from '@/http/cmsAPI';



const Home = async () => {

  const carouselItems : CarouselItemData[] | undefined = await getCarousel();
 
 
 
  return (
    <div className={styles.root}>
      
   
       <div>
        {carouselItems && <Carousel data={carouselItems} />}
       </div>

       <div className={styles.new} >Горячие новинки!</div>
       <div> </div>


    </div>
  )
}

export default Home