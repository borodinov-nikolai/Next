'use client';
import React, { useState } from 'react'
import styles from './newProductsSlider.module.scss'
import { Products } from '@/interfaces/Products'
import ProductCard from '@/components/CatalogPage/roductCar'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

interface Props {
    products:  Products
}

export const NewProductsSlider: React.FC<Props> = ({products}) => {
    const [shift, setShift] = useState<number>(0)


  const leftShift = ()=> {
    setShift( shift + 400)
  }

  const rightShift = ()=> {
    setShift( shift - 400)
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
