import NoPosts from "@/pages/components/NoPosts";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "POST") {
  const { title, content } = req.body;
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
    },
    include: {
      author:true
    }
  })
  res.json(newPost)
}

  if (req.method === 'GET') {
     const allPosts = await prisma.post.findMany({
      where: {
         published: true
       },
      include: {
         author: true
       }
       
     })
     res.json(allPosts)
     
  }

}