import React, { useState } from 'react'

const NewBlog = ({ newBlogObject }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    newBlogObject({
      title: title,
      author: author,
      url: url,
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title:
        <input
          type='text'
          value={title}
          name='Title'
          id='title'
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        Author:
        <input
          type='text'
          value={author}
          name='Author'
          id='author'
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        Url:
        <input 
          type='text' 
          value={url} 
          name='Url'
          id='url' 
          onChange={({ target }) => setUrl(target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewBlog
