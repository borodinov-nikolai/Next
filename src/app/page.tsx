import React from 'react'
import styles from './home.module.scss'
import Carousel_ from '@/components/HomePage/Carousel'
import { getCarousel } from '@/http/cmsAPI';
import { CarouselItemData } from '@/interfaces/CarouselItems';



const Home = async () => {
  const carouselData : CarouselItemData[] | undefined = await getCarousel();


  return (


    <div className={styles.root}>
      
      
       <div>
        <Carousel_ data={carouselData} />
       </div>

       <div className={styles.new} >Горячие новинки!</div>
       <div> </div>


    </div>
  )
}

export default Home