import React, {useState} from 'react'
const Blog = ({ blog, username, changedBlog, deleteBlog }) => {
  const [moreInfoVisible, setMoreInfoVisible] = useState(false)
  const [buttonLabel, setButtonLabel] = useState('View')

  const showWhenVisible = { display: moreInfoVisible ? '' : 'none', border: 'solid', borderWidth: 1 }
  var showIfLogged = { display: blog.user[0].username === username ? '' : 'none' }

  const togglVisibility = () => {
    setMoreInfoVisible(!moreInfoVisible)
    buttonLabel === 'View' ? setButtonLabel('Hide') : setButtonLabel('View')
  }

  const like = () => {
    changedBlog(blog.id, 
    {
      'user': blog.user[0].id,
      'title': blog.title,
      'author': blog.author,
      'url': blog.url,
      'likes': blog.likes + 1
    })
  }

  const remove = () => {
    if (window.confirm(`Are you sure you want to remove blog ${blog.title} by ${blog.author}?`)) {
      deleteBlog(blog.id)
    }
  }

  return (
    <div>
      <div>
        {blog.title}, {blog.author}
        <button onClick={togglVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        <p>{blog.url}</p>
        <p>
          {blog.likes} 
          <button onClick={like}>Like</button> 
        </p>
        <p>{blog.user[0].name}</p>
        <div style={showIfLogged}>
          <button onClick={remove}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
