import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Box, Typography } from '@mui/material'
import authService from '../../services/authService'

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //In real app, you will have an endpoint for getting all users
        const response = await authService.getAllUsers()
        setUsers(response)
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])
  const columns = [
    {field: 'id', headerName: 'ID', width: 220},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'email', headerName: 'Email', width: 250},
    {
      field: 'isAdmin', 
      headerName: 'Admin', 
      width: 120,
      renderCell: (params) => (params.value? 'Yes' : 'No')
    },
    {
      field: 'actions',
      headName: 'Actions',
      width: '200',
      renderCell: (params) => (
        <Box>
          <Button
          variant="outlined"
          size="small"
          sx={{ mr: 1 }}
          onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </Button>
          <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ]

  const handleEdit = (userId) => {
    console.log('Edit user:', userId)
    //Implement edit functionality
  }
  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await authService.deleteUser(userId)
        setUsers(users.filter(user => user.id !== userId))
      } catch (error) {
        console.error('Error deleting user:', error)
      }
    }
  }

  return (
    <Box sx={{ height: 600, width: '100%', p: 3}}>
      <Typography variant="h4" gutterButton>
        User Management
      </Typography>
      <DataGrid 
      rows={users}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      loading={loading}
      checkboxSelectionClick
      />
    </Box>
  )
}

export default UserManagement