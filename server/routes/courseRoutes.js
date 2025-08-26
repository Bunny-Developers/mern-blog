import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  createCourse,
  updateCourse,
  getCourses,
  getCourseBySlug,
  deleteCourse,
} from '../controllers/courseController.js'

const router = express.Router()

router.route('/')
  .get(getCourses)
  .post(protect, admin, createCourse)

router.route('/:slug')
  .get(getCourseBySlug)

router.route('/:id')
  .put(protect, admin, updateCourse)
  .delete(protect, admin, deleteCourse)

export default router