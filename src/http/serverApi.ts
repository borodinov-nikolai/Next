import { $cmsAPI } from "@/axios/config";





 export const getProducts = async (queryString:any)=> {
    try {
        
    
        const res = await $cmsAPI.get(`/products?${queryString?queryString:'sort=price:asc'}&populate=*`)
     
        return res.data

    } catch(e) {
        console.error(e)
    }
}

export const getProduct = async (id:string)=> {
    try {
        const res = await $cmsAPI.get(`/products/${id}`);
        return res.data.data
    }catch(e) {
        console.error(e)
    }
}


export const getGenres = async()=> {
    try {
        const res = await $cmsAPI.get('/genres')
        return res.data.data
    } catch(e) {
        console.error(e)
    }
}


export const getPlatforms = async ()=> {
    try {
        const res = await $cmsAPI.get('/platforms')
        return res.data.data
    } catch(e) {
        console.error(e)
    }
}
