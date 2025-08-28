import React from 'react';
import BlogList from '../components/blog/BlogList';
import '../components/modules/home.modules.css'

const HomePage = () => {
  // Mock data for blog posts
  const mockPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to build your first component.'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Techniques',
      excerpt: 'Explore advanced JavaScript concepts that will make you a better developer.'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'Understand when to use CSS Grid and when to use Flexbox in your layouts.'
    }
  ];

  return (
    <div className='body'>
      <div className='welcome-t'>
        <h1>Welcome to CodeMaster</h1>
      <p>Your one-stop destination for programming courses and tutorials.</p>
      <h2>Latest Blog Posts</h2>
      </div>
      <BlogList posts={mockPosts} />
    </div>
  );
};

export default HomePage;
