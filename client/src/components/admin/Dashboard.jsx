import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import blogService from '../../services/blogService';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // In a real app, you would have an endpoint for admin stats
        // For now, we'll simulate with mock data
        const mockStats = {
          totalPosts: 42,
          publishedPosts: 36,
          draftPosts: 6,
          monthlyPosts: [
            { name: 'Jan', posts: 3 },
            { name: 'Feb', posts: 5 },
            { name: 'Mar', posts: 7 },
            { name: 'Apr', posts: 4 },
            { name: 'May', posts: 6 },
            { name: 'Jun', posts: 8 },
          ],
          recentPosts: [
            { id: 1, title: 'React Hooks Guide', date: '2023-06-15' },
            { id: 2, title: 'MERN Stack Setup', date: '2023-06-10' },
            { id: 3, title: 'JavaScript ES6 Features', date: '2023-06-05' },
          ],
        };
        setStats(mockStats);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Posts
              </Typography>
              <Typography variant="h4">{stats.totalPosts}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Published
              </Typography>
              <Typography variant="h4">{stats.publishedPosts}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Drafts
              </Typography>
              <Typography variant="h4">{stats.draftPosts}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Posts This Year
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.monthlyPosts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Posts
          </Typography>
          <Box>
            {stats.recentPosts.map((post) => (
              <Box key={post.id} sx={{ mb: 1, p: 1, borderBottom: '1px solid #eee' }}>
                <Typography>{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.date}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;