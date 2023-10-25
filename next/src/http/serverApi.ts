import { $cmsAPI } from "@/axios/config";
import qs from "qs";




 export const getProducts = async (searchParams: {[key:string]:string})=> {
    try {
        const query = qs.stringify(searchParams)
    
        const res = await $cmsAPI.get(`/products?${query}&populate=*`)
     
        return res.data

    } catch(e) {
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
