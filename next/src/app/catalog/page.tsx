import React from "react";
import styles from "./catalog.module.scss";
import { getGenres, getMetaData, getPlatforms, getProducts } from "@/api/cmsAPI";
import ProductCard from "@/components/CatalogPage/productCard";
import Genres from "@/components/CatalogPage/filters/categories/genres";
import QueryBuilder from "@/components/CatalogPage/filters/queryBuilder";
import Search from "@/components/CatalogPage/filters/search";
import Sort from "@/components/CatalogPage/filters/sort";
import Paginations from "@/components/CatalogPage/pagination";
import qs from "qs";
import { ProductData } from "@/interfaces/Products";
import { DefaultValues } from "@/interfaces/App";
import Platforms from "@/components/CatalogPage/filters/categories/platforms";
import Mobile_category from "@/components/CatalogPage/filters/mobile_categories";
import { Metadata } from "next";

export const dynamic = "force-dynamic";



export async function generateMetadata(): Promise<Metadata> {
  const data = await getMetaData('catalog')
  return {
    title: data?.attributes?.meta?.title,
    description: data?.attributes?.meta?.description,
    keywords: "STARFIELD, Mortal Kombat 1, Minecraft, Assassins Creed Mirage, Alan Wake 2, Marvels Spider-Man 2, Lies of P, PAYDAY 3, оффлайн активация, offline activation, denuvo, crack, repack, autoactivation, forza horizon 5, microsoft store"
    }
}


const Catalog = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  

  const queryString = qs.stringify(searchParams);

  const products = await getProducts(queryString);

  const platforms = await getPlatforms();
  const genres = await getGenres();

  const parsedQS: unknown = qs.parse(queryString);

  const defaultValues = parsedQS as DefaultValues; 

  return (
    <div className={styles.root}>
      <QueryBuilder defaultValues={defaultValues} />

      <div className={styles.mobile_navbar} > 
     <Mobile_category platforms={platforms} genres={genres} defaultValues={defaultValues} />
       </div>
    
      <div className={styles.platforms}>
        { platforms && <Platforms data={platforms}  defaultValue={defaultValues?.filters?.platform?.name} />}
      </div>

      <div className={styles.search}>
        {" "}
        <Search />{" "}
      </div>
      <div className={styles.sort}>
        <span>Сортировка:</span>
        <Sort defaultValue={defaultValues?.sort?.[0]} />
      </div>

      <div className={styles.genres_title}>Категории:</div>
      <div className={styles.genres}>
        {genres && <Genres data={genres} defaultValue={defaultValues?.filters?.genres?.name} />}
      </div>
      <div className={styles.product_cards}>
        { products && products.data.map((product: ProductData) => {
          return (
            <div key={product.id} className={styles.product_card}>
              <ProductCard  product={product} size="medium" />
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <Paginations
          value={products?.meta?.pagination}
          defaultValue={defaultValues?.pagination}
        />
      </div>
    </div>
  );
};

export default Catalog;
