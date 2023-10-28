import { $digisellerAPI } from "@/axios/config"




export const getProductInfo = async (productID : string)=> {
    try {
        const res = await $digisellerAPI.get(`/products/${productID}/data`)
        return res.data
    } catch(e) {
        console.error(e)
    }
}