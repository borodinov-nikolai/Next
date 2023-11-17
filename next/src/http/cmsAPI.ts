import { $cmsAPI } from "@/axios/config";
import { CarouselItems } from "@/interfaces/CarouselItems";
import { Genres } from "@/interfaces/Genres";
import { Platforms } from "@/interfaces/Platforms";
import { Product, Products } from "@/interfaces/Products";





 export const getProducts = async (queryString:any)=> {
    try {
        
    
        const {data}: {data: Products} = await $cmsAPI.get(`/products?${queryString?queryString:'sort=price:asc'}&populate[0]=image&populate[1]=platform.icon`)
    
        
        return data

    } catch(e) {
        console.error(e)
    }
}

export const getNewProducts = async ()=> {
    try {
        
    
        const {data}: {data: Products} = await $cmsAPI.get(`/products?filters[new][$eq]=true&populate[0]=image&populate[1]=platform.icon`)
    
        
        return data

    } catch(e) {
        console.error(e)
    }
}

export const getCarousel = async ()=> {
    try {
        
    
        const {data} :{data: CarouselItems } = await $cmsAPI.get(`/carousel-items?populate=*`)
     
        return data.data

    } catch(e) {
        console.error(e)
    }
}

export const getProduct = async (id:string)=> {
    try {
        const {data}: {data:Product} = await $cmsAPI.get(`/products/${id}`);
        return data.data
    }catch(e) {
        console.error(e)
    }
}


export const getGenres = async()=> {
    try {
        const {data}: {data: Genres} = await $cmsAPI.get('/genres')
        return data.data
    } catch(e) {
        console.error(e)
    }
}


export const getPlatforms = async ()=> {
    try {
        const {data}:{data:Platforms} = await $cmsAPI.get('/platforms?populate=*')
        return data.data
    } catch(e) {
        console.error(e)
    }
}