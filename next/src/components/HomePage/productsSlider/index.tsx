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
    const count = products.data.length - 5
    const productWidth = 440
    const data = [...products.data, ...products.data,...products.data]
  console.log(data.length)
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
           products && data.map((product, i)=> {
             return (
               <ProductCard key={i} product={product} size='medium' imageResolution={{height:500, width:500}} />
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