import { getMetaData } from "@/api/cmsAPI";




export const pageMetadata = async (pageName:string) => {
    const data = await getMetaData(pageName)
     
   
    
    return ({
      title: data?.attributes?.meta?.title,
      description: data?.attributes?.meta?.description
    })
}