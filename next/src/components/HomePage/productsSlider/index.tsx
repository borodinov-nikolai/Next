'use client';
import React, { useEffect, useState } from 'react'
import styles from './productsSlider.module.scss'
import { Products } from '@/interfaces/Products'
import ProductCard from '@/components/CatalogPage/productCard'


interface Props {
    products:  Products
}

const ProductsSlider: React.FC<Props> = ({products}) => {
  
const [state, setState] = useState<number>()
const data = [...products.data,...products.data,...products.data]

    // push products to arr for infinity scroll
    
  //   useEffect(()=> {
  //     const data = [];
  //     for (let i=0; i<3; i++ ) {
  // console.log('rerender')
  
  //       data.push(...products.data)
  //       }
  //   }, [])
  


console.log(data)
  
  return (

    <div className={styles.root}>
        <div 
         className={styles.cardHolder} >

        <div className={styles.cardHolder_inner}>
          {
           products && data.map((product, index)=> {
             return (
               <ProductCard key={index} product={product} size='medium' imageResolution={{height:500, width:500}} />
             )
           })
          }
        </div>
          </div>
    </div>

  )
}



export default ProductsSlider;