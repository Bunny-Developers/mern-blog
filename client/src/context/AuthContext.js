import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getMe()
        setUser(userData)
      } catch (error) {
        console.error('Authentication Problen:', error);
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  const login = async (credentials) => {
    const userData = await authService.login(credentials)
    setUser(userData)
    navigate(userData.isAdmin ? '/admin' : '/')
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
    navigate('/login')
  }

  const register = async (userData) => {
    const newUser = await authService.register(userData)
    setUser(newUser)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)