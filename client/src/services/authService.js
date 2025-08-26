import axios from '../utils/axiosConfig.js'

const register = async(userData) => {
  const response = await axios.post('api/auth/register', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const login =async (credentials) => {
  const response = await axios.post('/api/auth/login', credentials)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}

const getMe = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    throw new Error('No User logged in')
  }
  const response = await axios.get('/api/auth/me', {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
  return response.data
}

export default {
  register,
  login,
  logout,
  getMe
}

