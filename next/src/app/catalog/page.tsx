import React from 'react'
import styles from './catalog.module.scss'
import { getProducts } from '@/http/serverApi';
import ProductCard from '@/components/CatalogPage/ProductCard';
import Platforms from '@/components/CatalogPage/filters/Platforms';
import Genres from '@/components/CatalogPage/filters/Genres';
import QueryBuilder from '@/components/CatalogPage/filters/queryBuilder';
export const dynamic = 'force-dynamic';





interface Props {
  searchParams: {[key:string]:string},
  params: {[key:string]:string}

}


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




const Catalog: React.FC<Props> = async ({searchParams, params}) => {



console.log(params)

  



let products = await getProducts(searchParams);


  return (
    <div className={styles.root}>
            <QueryBuilder/>
          <div className={styles.platforms} ><Platforms/></div>
          <div className={styles.genres}><Genres/></div>
        <div className={styles.product_cards}>
            {products?.data?.map((product:Product)=> {
              return <div key={product.id} className={styles.card}> 
            
              <ProductCard product={product} />
           </div>
            } )}
           
        </div>
      </div>

    
      
   
  )
}

export default Catalog
