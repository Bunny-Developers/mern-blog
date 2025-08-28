import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import CoursePage from './pages/CoursePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
// import AdminPage from './pages/AdminPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx' // Import the new component
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/login-register" element={<LoginPage />} />
       {/* <Route path="/admin/*" element={<AdminPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />{/* Catch-all route */}
      </Routes>
      <Footer />
      {/* <AdminPage /> */}
    </ThemeProvider>
  );
}

export default App