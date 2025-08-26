import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  PostAdd as PostAddIcon,
  School as SchoolIcon,
  People as PeopleIcon,
} from '@mui/icons-material';


const drawerWidth = 240;
const AdminNavbar = () => {
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Posts', icon: <PostAddIcon />, path: '/admin/posts/new' },
    { text: 'Courses', icon: <SchoolIcon />, path: '/admin/courses' },
    { text: 'Users', icon: <PeopleIcon />, path: '/admin/users' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AdminNavbar;