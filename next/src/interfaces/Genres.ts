import { Meta } from "./Meta"
import { Products } from "./Products"




export interface Genres {
    data: GenreData[]
    meta: Meta
  }
  
  export interface GenreData {
    id: number
    attributes: GenreAttributes
    products: Products
  }
  
  export interface GenreAttributes {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }