import { Image } from "./Image";
import { Meta } from "./Meta";
import { Products } from "./Products";



export interface Platforms {
  data: PlatformData[];
  meta: Meta;
  product: Products;
}

export interface Platform {
  data: PlatformData;
  meta: Meta;
  product: Products;
}

export interface PlatformData {
  id: number;
  attributes: PlatformAttributes;
}

export interface PlatformAttributes {
  name: string;
  icon: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
