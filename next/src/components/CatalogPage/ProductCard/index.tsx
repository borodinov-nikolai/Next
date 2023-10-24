import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
  product: {
    id: number, 
      attributes: {
        name: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        url: string,
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


const ProductCard: React.FC<Props> = ({product}) => {
  console.log(product)
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL +
         product?.attributes.image.data[0].attributes.url}
        width={800} height={800} alt='spider man 2'></Image>
      </div>
      <div  className={styles.name} >{product.attributes.name}</div>
      <div className={styles.btn}>
        <Link href={product.attributes.url} ><button >Купить</button></Link>
        </div>

    </div>
  )
}

export default ProductCard