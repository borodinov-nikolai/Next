import React from 'react';
import styles from './catalog.module.scss';
import { getProducts } from '@/http/serverApi';
import ProductCard from '@/components/CatalogPage/ProductCard';
import Platforms from '@/components/CatalogPage/Filters/Platforms';
import Genres from '@/components/CatalogPage/Filters/Genres';
import QueryBuilder from '@/components/CatalogPage/Filters/queryBuilder';
import Search from '@/components/CatalogPage/Filters/search';
import Sort from '@/components/CatalogPage/Filters/sort';
import qs from 'qs'






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
    price: number
    image: {
      data: [
        {attributes: {
          url:string
        }}
      ]
    }
  }

}



const Catalog: React.FC<Props> = async ({searchParams}) => {
  
  

  type DefaultValues =  {
    sort: string[] | undefined,
    filters: {
      genres: { name: string | undefined } | undefined,
      platform: { name: string |undefined } | undefined,
      name: { [key:string]:string | undefined } | undefined
    } | undefined
  } | undefined
  
  
  
  
  const queryString = qs.stringify(searchParams)

let products = await getProducts(queryString);
  
   const parsedQS = qs.parse(queryString);
  
const defaultValues = parsedQS as DefaultValues



  return (
    <div className={styles.root}>
            <QueryBuilder defaultValues={defaultValues}  />
          <div className={styles.platforms} ><Platforms defaultValue={defaultValues?.filters?.platform?.name} /></div>

          <div className={styles.search_sort}>
            <div className={styles.search}> <Search/> </div>
            <div className={styles.sort} ><Sort defaultValue={defaultValues?.sort?.[0]} /></div>
          </div>
                 
            <div className={styles.genres_title}>Выберите жанр:</div>
          <div className={styles.genres}>
            <Genres defaultValue={defaultValues?.filters?.genres?.name}/></div>
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
