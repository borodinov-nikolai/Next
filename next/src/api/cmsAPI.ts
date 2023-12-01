import { $cmsAPI } from "@/libs/axios/config";
import { CarouselItems } from "@/interfaces/CarouselItems";
import { PageContent } from "@/interfaces/PageContent";
import { Genres } from "@/interfaces/Genres";
import { Platforms } from "@/interfaces/Platforms";
import { Product, Products } from "@/interfaces/Products";




export const getMetaData = async (name:string) => {

      try {
        const {data} : {data:PageContent} = await $cmsAPI.get(`/${name}-page?populate[0]=meta`)
        return data.data
      } catch(e) {
        console.error(e)
      }
}





 export const getProducts = async (queryString:string)=> {
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

export const deleteProduct = (id:string)=> {
    try {
      $cmsAPI.delete(`/products/${id}`);
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



export const putPrice = (id: string, price: number)=> {
    try {
        $cmsAPI.put(`/products/${id}`, {
            data: {
                price : Number(price)
            }
        })
       
    } catch(e) {
        console.error(e)
    }

    
}
