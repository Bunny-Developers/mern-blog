import asyncHandler from 'express-async-handler'
import Course from '../models/Course.js'

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {
  const { title, description, thumbnail, price } = req.body

  const course = await Course.create({
    title,
    description,
    thumbnail,
    price,
    instructor: req.user._id,
  })

  res.status(201).json(course)
})

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
  const { title, description, thumbnail, price } = req.body

  const course = await Course.findById(req.params.id)

  if (!course) {
    res.status(404)
    throw new Error('Course not found')
  }

  // Check if the user is the instructor or admin
  if (course.instructor.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(401)
    throw new Error('Not authorized to update this course')
  }

  course.title = title || course.title
  course.description = description || course.description
  course.thumbnail = thumbnail || course.thumbnail
  course.price = price || course.price

  const updatedCourse = await course.save()

  res.json(updatedCourse)
})

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({}).populate('instructor', 'name avatar')

  res.json(courses)
})

// @desc    Get single course by slug
// @route   GET /api/courses/:slug
// @access  Public
const getCourseBySlug = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug }).populate(
    'instructor',
    'name avatar'
  )

  if (!course) {
    res.status(404)
    throw new Error('Course not found')
  }

  res.json(course)
})

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

  if (!course) {
    res.status(404)
    throw new Error('Course not found')
  }

  // Check if the user is the instructor or admin
  if (course.instructor.toString() !== req.user._id.toString() && !req.user.isAdmin) {
    res.status(401)
    throw new Error('Not authorized to delete this course')
  }

  await course.remove()
  res.json({ message: 'Course removed' })
})

export {
  createCourse,
  updateCourse,
  getCourses,
  getCourseBySlug,
  deleteCourse,
}