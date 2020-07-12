const { request } = require("express")
const blog = require("../models/blog")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) =>{
  let likes = 0
  blogs.map(blog => { likes += blog.likes })
  return likes
}

module.exports = {
  dummy,
  totalLikes
}