// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
const config = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn:process.env.NODE_ENV==="production",
    apiVersion: "2022-03-25",
  };
  const client = sanityClient(config)

export default async function createCommenthandler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method==="POST") {
    const {_id,name,email,comment}=req.body
    try {
        await client.create({
            _type:'comment',
            post:{
                _type:'reference',
                _ref:_id
            },
            name,
            email,
            comment
        })
    } catch (error) {
        res.status(500).json({message:"Cannot submit comment",error})
        return
    }
    res.status(200).json({message:"Comment Submitted"})
  }
}
