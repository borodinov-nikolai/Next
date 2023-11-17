import { Image} from "./Image"
import { Meta } from "./Meta"
import { Platform} from "./Platforms"



export interface Products {
    data: ProductData[]
    meta: Meta
  }


  export interface Product {
      data: ProductData
     
  }
  
  export interface ProductData {
    id: number
    attributes: ProductAttributes
  }
  
  export interface ProductAttributes {
    name: string
    productName: string
    productID: string
    buyURL: string
    price: number
    hit: boolean
    new: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: Image
    platform: Platform
  }
  

  