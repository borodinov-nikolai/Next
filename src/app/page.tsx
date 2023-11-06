import React from 'react'
import styles from './home.module.scss'
import Carousel_ from '@/components/HomePage/Carousel'



const Home = () => {
  return (
    <div className={styles.root}>
      
       {/* <div className={styles.title}>Добро пожаловать на petproekt.store</div>
       <div> У нас вы можете приобрести аккаунты и ключи игр</div> */}
       <div>
        <Carousel_/>
       </div>

       <div className={styles.new} >Горячие новинки!</div>
       <div> </div>


    </div>
  )
}

export default Home