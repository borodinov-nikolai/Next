import { $api_Server_CMS } from "@/axios/serverConfig";
import axios from "axios";



 export const getProducts = async ()=> {
    try {
        const {data} = await $api_Server_CMS.get('/products?populate=*')
     
        return data

    } catch(e) {
        console.error(e)
    }
}