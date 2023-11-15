import { Image } from "./Image"
import { Meta } from "./Meta"




export interface CarouselItems {
  data: CarouselItemData[]
  meta: Meta
}

export interface CarouselItemData {
  id: number
  attributes: CarouselItemAttributes
}

export interface CarouselItemAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
  price: number
  desktop_image: Image
  mobile_image: Image
}