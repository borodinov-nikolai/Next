import { Meta } from "./Meta"

export interface PageContent {
    data: Data
    meta: Meta
  }
  
  export interface Data {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    createdAt: string
    updatedAt: string
    publishedAt: string
    meta: MetaData
  }
  
  export interface MetaData {
    id: number
    title: string
    description: string
    author: string
  }