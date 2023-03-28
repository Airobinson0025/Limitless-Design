import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export default async function handle(req, res ) {
    
    if (req.method === 'DELETE') {
        
        const post = await prisma.post.delete({
            where: {
                id: parseInt(req.query.id)
            }
     })
        res.json(post)
    
   }

   if (req.method === 'PUT') {
    const { title, content } = req.body;
    const updatedPost = await prisma.post.update({
        where: {
            id: parseInt(req.query.id)
        },
        data: {
            title,
            content
        }
    })
    res.json(updatedPost)
   }

   if (req.method === 'GET') {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(req.query.id)
        },
        include: {
            author: true
        }
    })
    res.json(post)}
}