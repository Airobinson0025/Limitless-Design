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
}