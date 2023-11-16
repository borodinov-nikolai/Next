'use client';
import React, { useState } from 'react'
import styles from './productsSlider.module.scss'
import { Products } from '@/interfaces/Products'
import ProductCard from '@/components/CatalogPage/productCard'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

interface Props {
    products:  Products
}

const ProductsSlider: React.FC<Props> = ({products}) => {
    const [shift, setShift] = useState<number>(0)
    const count = products.data.length - 4
    const productWidth = 640
    
console.log(products.data.length)
  const leftShift = ()=> {
    if(count % 2 === 0) {
        if( shift < productWidth * count/2){
            setShift( shift + productWidth)
        }
        } else {
            if( shift < productWidth * (count-1)/2 ) {
                setShift( shift + productWidth)
            }
        }
    
  }

  const rightShift = ()=> {
    if(count % 2 === 0) {
        if( shift > -productWidth * count/2){
            setShift( shift - productWidth)
        }
        } else {
            if( shift > -productWidth * (count-1)/2 ) {
                setShift( shift - productWidth)
            }
        }
    

  }

  return (

    <div className={styles.root}>
        <div className={styles.cardHolder} >
        <LeftCircleOutlined onClick={leftShift} className={styles.leftArrow} />
        <div style={{marginLeft: String(shift) + 'px'}} className={styles.cardHolder_inner}>
          {
           products && products.data.map((product)=> {
             return (
               <ProductCard product={product} size='large' imageResolution={{height:500, width:500}} />
             )
           })
          }
          <RightCircleOutlined onClick={rightShift} className={styles.rightArrow} />
        </div>
          </div>
    </div>

  )
}



export default ProductsSlider;