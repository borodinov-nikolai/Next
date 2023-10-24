import React from 'react'
import styles from './catalog.module.scss'
import { getProducts } from '@/http/serverApi';
import ProductCard from '@/components/CatalogPage/ProductCard';









const Catalog: React.FC = async () => {


  interface Product {
  
      id: number, 
      attributes: {
        name: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        url: string,
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
      <div className="container">
   
        <div className={styles.card_holder}>
            {products?.data.map((product:Product)=> {
              return <div className={styles.card}> 
            
              <ProductCard product={product} />
           </div>
            } )}
           
        </div>
      </div>

    
      
    </div>
  )
}

export default Catalog