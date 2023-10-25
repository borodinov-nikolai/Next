import axios from "axios";



 export const $cmsAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CMS_URL
  });

  export const $digisellerAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DIGISELLER_API,
    headers: {'Accept': 'application/json'}
}
)