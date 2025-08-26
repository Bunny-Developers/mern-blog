import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
import authRoutes from './routes/authRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import courseRoutes from './routes/courseRoutes.js'

app.use('/api/auth', authRoutes)
app.use('/api/posts', blogRoutes)
app.use('/api/courses', courseRoutes)

// Error Handling Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})