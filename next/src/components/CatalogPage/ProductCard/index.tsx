import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { getProductInfo } from '@/http/digisellerAPI'


interface Props {
  product: {
    id: number, 
      attributes: {
        name: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        buyURL: string,
        image: {
          data: [{
            attributes: {
              url:string
            }}
          ]
        }
      }
  }
}


const ProductCard: React.FC<Props> = async ({product}) => {
  
 
  const info = await getProductInfo(product?.attributes.productID)
  const available = info?.product.is_available
  const price = info?.product.prices.default.RUB
  const image = product?.attributes.image?.data[0].attributes.url
  
  
  return (
    <div className={styles.root}>
       <Link href={product?.attributes.buyURL}>
      <div className={styles.image}>
       <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image
         }
        width={800} height={800} alt={product?.attributes.name}></Image>
      </div>
      {/* <div  className={styles.name}>{product.attributes.name}</div> */}
      {available? <div className={styles.btn}>
       <div className={styles.price} >{price} <span>₽</span></div>
        </div>: <div>Товар закончился </div> }
        </Link>
    </div>
  )
}

export default ProductCard