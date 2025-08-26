import { Routes, Route} from 'react-router-dom'
import AdminNavbar from '../components/admin/AdminNavbar.jsx'
import Dashboard from '../components/admin/Dashboard.jsx'
import PostEditor from '../components/admin/PostEditor.jsx'
import CourseUploader from '../components/admin/CourseUploader.jsx'
import UserManagement from '../components/admin/UserManagement.jsx'

const AdminPage = () => {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts/new" element={<PostEditor />} />
        <Route path="/posts/:id/edit" element={<PostEditor />} />
        <Route path="/courses" element={<CourseUploader />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </div>
  );
}

export default AdminPage;