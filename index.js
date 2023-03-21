const express = require('express');
const app = express();
const port = process.env.PORT || 5003;
app.use(express.json());

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    
    res.json({ message: 'working'})
})


//! create post
app.post('/publish',async  (req, res) => {
    const { title, content, published } = req.body
    const createPost = await prisma.post.create({
        data: {
            
            title,
            content,
            published:true
        }
            
    })
    res.json(createPost)
})

//! get all posts
app.get('/feed', async (req, res) => {
    const getPosts = await prisma.post.findMany({
        where: {
            
            published: true
        },
        include: {
            
            author: true
        }
    })
    res.json(getPosts)
})

//! get single post
app.get(`/feed/:id`, async (req, res) => {
    const { id } = req.params
    const singlePost = await prisma.post.findUnique({
        where: { id: Number(id) }
    })
    res.json(singlePost)
})

//! create a post
app.post('/post', async (req, res) => {
    const { title, content } = req.body
    const createPost = await prisma.post.create({
        data: {
            title,
            content,
            published: false
        }
    })
    res.json(createPost)
})

//!update a post
app.put('publish/:id', async (req, res) => {
    const { id } = req.params
    const updatePost = await prisma.post.update({
        where: { id },
        data: { published: true }
    })
    res.json(updatePost)
})

//! delete post 
app.delete('/post/:id', async (req, res) => {
    const { id } = req.params
    const deletePost = await prisma.post.delete({
        where: { id }
    })
    res.json(deletePost)
})



//********** USERS *****************/

//! get all basic
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({
        where: { role: 'USER' }
    })
    res.json(users)
})

//! get user by id 
app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const singleUser = await prisma.user.findUnique({
        
        where: { id }
        
    })
    res.json(singleUser)
})

//! get admin user

app.get('/user', async (req, res) => {
    const admin = await prisma.user.findMany({
        where: {
            role: 'AMDIN'
        },
        include: {
            posts: true
        }
        
    })
    res.json(admin)
})

//! update user 
app.put('users/:id', async (req, res) => {d
    const { email, name } = req.body
    const { id } = req.params
    
    const updateUser = await prisma.user.update({
        where: { id },
        data: {
            email,
            name
        }
    })
    res.json(updateUser)
})

//! delete a user 
app.delete('users/:id', async (req, res) => {
    const { id } = req.params
    const deleteUser = await prisma.user.delete({
        
        where: { id }
    })
    res.json(deleteUser)
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

