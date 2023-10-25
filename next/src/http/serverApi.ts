import { $cmsAPI } from "@/axios/config";




 export const getProducts = async ()=> {
    try {
        const {data} = await $cmsAPI.get('/products?populate=*')
     
        return data

    } catch(e) {
        console.error(e)
    }
}


