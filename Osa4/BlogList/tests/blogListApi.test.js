const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const helper = require('../utils/apiTestHelper')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(helper.initalBlogs[0])
  await blogObject.save()

  blogObject = new Blog(helper.initalBlogs[1])
  await blogObject.save()
})

describe('GET', () => {
  test('Blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('Correct amount of blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.initalBlogs.length)
  })

  test('Identifying field is named id', async () => {
    const response = await api.get('/api/blogs')
    response.body.forEach((blog) => expect(blog.id).toBeDefined())
  })
})

describe('POST', () => {
  test('A new blog can be added', async () => {
    const newBlog = {
      title: 'TestBlog',
      author: 'Dev',
      url: 'http://TestBlog.com',
      likes: 1000,
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogs = await helper.getBlogs()

    expect(blogs.length).toBe(helper.initalBlogs.length + 1)
  })

  test('Likes are set to 0 if empty', async () => {
    const noLikesBlog = {
      title: 'TestBlog',
      author: 'Dev',
      url: 'http://TestBlog.com',
    }
    const response = await api
      .post('/api/blogs')
      .send(noLikesBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(response.body.likes).toBe(0)
  })

  test('400 is returned if title missing', async () => {
    const noTitleBlog = {
      author: 'Dev',
      url: 'TestBlog',
      likes: 1000,
    }
    await api
      .post('/api/blogs')
      .send(noTitleBlog)
      .expect(400)
  })

  test('400 is returned if url missing', async () => {
    const noUrlBlog = {
      title: 'TestBlog',
      author: 'Dev',
      likes: 1000,
    }
    await api
      .post('/api/blogs')
      .send(noUrlBlog)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
