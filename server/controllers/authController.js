import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import generateToken from '../utils/generateToken.js'
import * as mockData from '../utils/mockData.js'

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = mockData.getUserByEmail(email)

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = mockData.addUser({
    name,
    email,
    password, // In a real app, this would be hashed
    isAdmin: false,
    avatar: '',
  })

  if (user) {
    const token = generateToken(user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      token,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = mockData.getUserByEmail(email)

  // In a real app, we would hash and compare passwords
  // For demo purposes, we'll just check if the password is "admin123"
  if (user && password === 'admin123') {
    const token = generateToken(user._id)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      token,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Get user profile
// @route   GET /api/auth/me
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = mockData.getUserById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { registerUser, authUser, getUserProfile }