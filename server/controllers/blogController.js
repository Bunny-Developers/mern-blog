import asyncHandler from 'express-async-handler'
import * as mockData from '../utils/mockData.js'

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private/Admin
const createPost = asyncHandler(async (req, res) => {
  const { title, excerpt, content, featuredImage, codeBlocks, isPublished } = req.body

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')

  const post = mockData.addPost({
    title,
    excerpt,
    content,
    featuredImage,
    codeBlocks,
    isPublished,
    slug,
    author: req.user._id,
  })

  res.status(201).json(post)
})

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private/Admin
const updatePost = asyncHandler(async (req, res) => {
  const { title, excerpt, content, featuredImage, codeBlocks, isPublished } = req.body

  const post = mockData.getPostById(req.params.id)

  if (!post) {
    res.status(404)
    throw new Error('Post not found')
  }

  // Check if the user is the author or admin
  if (post.author.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(401)
    throw new Error('Not authorized to update this post')
  }

  // Generate new slug if title changed
  let slug = post.slug
  if (title !== post.title) {
    slug = title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-')
  }

  const updatedPost = mockData.updatePost(req.params.id, {
    title: title || post.title,
    excerpt: excerpt || post.excerpt,
    content: content || post.content,
    featuredImage: featuredImage || post.featuredImage,
    codeBlocks: codeBlocks || post.codeBlocks,
    isPublished: isPublished !== undefined ? isPublished : post.isPublished,
    slug,
  })

  res.json(updatedPost)
})

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  // For mock data, we'll filter posts based on keyword
  let filteredPosts = mockData.getPosts()
  if (req.query.keyword) {
    filteredPosts = filteredPosts.filter(post => 
      post.isPublished && 
      (post.title.toLowerCase().includes(req.query.keyword.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(req.query.keyword.toLowerCase()))
    )
  } else {
    filteredPosts = filteredPosts.filter(post => post.isPublished)
  }

  const count = filteredPosts.length
  const posts = filteredPosts.slice((page - 1) * pageSize, page * pageSize)

  // Add author info to posts
  const postsWithAuthors = posts.map(post => ({
    ...post,
    author: mockData.getUserById(post.author) || { name: 'Unknown', avatar: '' }
  }))

  res.json({ posts: postsWithAuthors, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Get single post by slug
// @route   GET /api/posts/:slug
// @access  Public
const getPostBySlug = asyncHandler(async (req, res) => {
  const post = mockData.getPostBySlug(req.params.slug)

  if (!post || !post.isPublished) {
    res.status(404)
    throw new Error('Post not found')
  }

  // Add author info to post
  const postWithAuthor = {
    ...post,
    author: mockData.getUserById(post.author) || { name: 'Unknown', avatar: '' }
  }

  res.json(postWithAuthor)
})

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = mockData.getPostById(req.params.id)

  if (!post) {
    res.status(404)
    throw new Error('Post not found')
  }

  // Check if the user is the author or admin
  if (post.author.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(401)
    throw new Error('Not authorized to delete this post')
  }

  mockData.deletePost(req.params.id)
  res.json({ message: 'Post removed' })
})

export {
  createPost,
  updatePost,
  getPosts,
  getPostBySlug,
  deletePost,
}