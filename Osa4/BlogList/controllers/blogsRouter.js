const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', (request, response) => {
  const body = request.body
  const blog = new Blog(body)
  blog.save().then((result) => {
    response.status(201).json(result.toJSON())
  })
})

module.exports = blogsRouter
