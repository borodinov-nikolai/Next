import axios from "axios";



 export const $api_Server_CMS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CMS_URL
  });