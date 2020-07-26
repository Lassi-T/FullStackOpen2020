const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (request, response) => {
  logger.info(request)
  const blog = await Blog.findById(request.params.id)
  response.json(blog.toJSON())
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.likes) {
    body.likes = 0
  }
  
  const blog = new Blog(body)
  const savedBlog = await blog.save()
  response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async(request, response) => {
   const body = request.body

   const blog = {
     author: body.author,
     title: body.title,
     url: body.url,
     likes: body.likes
   }

   await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
   const savedBlog = await Blog.findById(request.params.id)
   response.json(savedBlog.toJSON())
})

module.exports = blogsRouter
