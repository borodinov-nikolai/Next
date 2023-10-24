'use client'

import React from 'react'
import styles from './catalog.module.scss'
import axios from 'axios'
import Image from 'next/image'







const Catalog = () => {

const [data, setData] = React.useState<any>()


React.useEffect(()=> {
  const getData = async () => {

    const res = await axios.get('https://api.digiseller.ru/api/products/3023584/data', {
      headers: {
        Accept: 'application/json'
      }
    }
    
    );

    setData(res)
}
  
getData()
}, [])



//vmprweomnvperwnm


 

  return (
    <div className={styles.root}>
      <div className="container">
   
        <div className={styles.card_holder}>
            <div className={styles.card}> 
              <div className={styles.img} >
           
              </div>
            </div>
            <div className={styles.card}>
              
            </div>
            <div className={styles.card}>
              
            </div>
            <div className={styles.card}>
              
            </div>
        </div>
      </div>

    
      
    </div>
  )
}

export default Catalog