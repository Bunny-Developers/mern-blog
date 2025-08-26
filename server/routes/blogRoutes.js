import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  createPost,
  updatePost,
  getPosts,
  getPostBySlug,
  deletePost,
} from '../controllers/blogController.js'

const router = express.Router()

router.route('/')
  .get(getPosts)
  .post(protect, admin, createPost)

router.route('/:slug')
  .get(getPostBySlug)

router.route('/:id')
  .put(protect, admin, updatePost)
  .delete(protect, admin, deletePost)

export default router