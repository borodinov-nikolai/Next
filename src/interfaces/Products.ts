import { Images } from "./Image"
import { Meta } from "./Meta"



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
    productID: string
    buyURL: string
    price: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: Images
  }
  

  