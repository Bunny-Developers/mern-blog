import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Try to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    console.log('Running in mock mode without database connection')
    // Continue without database connection (mock mode)
  }
}

export default connectDB