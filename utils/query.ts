import { client } from "../sanity"

export const getAllPosts=async()=>{
    const query = `*[_type=='post']{
        _id,
        title,
        slug,
        author->{
        name,
        image,
      },
      description,
      mainImage,
      slug,
        }`
        const response = await client.fetch(query)
        return response
}