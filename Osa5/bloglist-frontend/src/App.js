import React, { useState, useEffect } from 'react'
import './App.css'
import Blog from './components/Blog'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'
import NewBlog from './components/NewBlog'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])

  //Sort the blogs by most likes
  blogs.sort((a,b) => b.likes - a.likes)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Invalid username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
    blogService.setToken(null)
    window.location.reload()
  }

  const addBlog = async blogObject => {
    try {
      await blogService.post(blogObject)
      blogService.getAll().then(blogs => setBlogs(blogs))

      setMessage(`A new blog "${blogObject.title}" by ${blogObject.author} was added`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (exception) {
      setErrorMessage('Invalid blog')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        Username
        <input
          type='text'
          value={username}
          name='Username'
          id='username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        Password
        <input
          type='password'
          value={password}
          name='Password'
          id='password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type='submit' id='login'>login</button>
    </form>
  )

  const newBlogForm = () => (
    <Togglable buttonLabel='New Blog'>
      <NewBlog newBlogObject={addBlog}  />
    </Togglable>
  )

  const changeBlog = async (id, blogObject) => {
    await blogService.update(id, blogObject)
    blogService.getAll().then(blogs => setBlogs(blogs))
  }

  const deleteBlog = async (id) => {
    await blogService.remove(id)
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to the application</h2>
        <Notification message={message} />
        <ErrorMessage message={errorMessage} />
        {loginForm()}
      </div>
    )
  }

  return (
    <div>
      <h2 className='Title'>Blogs</h2>
      <Notification message={message} />
      <p>
        {user.name} is logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      <h2>New Blog</h2>
      {newBlogForm()}
      {blogs.map(blog => (
        <Blog 
          key={blog.id} 
          blog={blog} 
          username={user.username} 
          changedBlog={changeBlog}
          deleteBlog={deleteBlog}
        />
      ))}
    </div>
  )
}

export default App
