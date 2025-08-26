import express from 'express'
import { registerUser, authUser, getUserProfile } from '../controllers/authController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/me').get(protect, getUserProfile)

export default router