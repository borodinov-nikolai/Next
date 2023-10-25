import React from 'react'
import styles from './catalog.module.scss'
import { getProducts } from '@/http/serverApi';
import ProductCard from '@/components/CatalogPage/ProductCard';
import Platforms from '@/components/CatalogPage/filters/platforms';
import Genres from '@/components/CatalogPage/filters/genres';










const Catalog: React.FC = async () => {


  interface Product {
  
      id: number, 
      attributes: {
        name: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        buyURL: string,
        image: {
          data: [
            {attributes: {
              url:string
            }}
          ]
        }
      }
  
    }
  
  


let products = await getProducts();

console.log(products?.data)

  return (
    <div className={styles.root}>
     
          <div className={styles.platforms} ><Platforms/></div>
          <div className={styles.genres}><Genres/></div>
        <div className={styles.product_cards}>
            {products?.data.map((product:Product)=> {
              return <div key={product.id} className={styles.card}> 
            
              <ProductCard product={product} />
           </div>
            } )}
           
        </div>
      </div>

    
      
   
  )
}

export default Catalog
