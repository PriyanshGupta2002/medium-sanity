import { createClient,createCurrentUserHook } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'
 const config = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2022-03-25",
    useCdn:process.env.NODE_ENV==="production"
  }; 

  export const client = createClient(config)
  export const urlFor=(source)=>{
   return createImageUrlBuilder(config).image(source)
  }
  export const useCurrentUser = createCurrentUserHook(config)