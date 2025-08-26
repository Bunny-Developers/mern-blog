import axios from 'axios';

const API_URL = '/api/posts';

// Get all posts
const getPosts = async (keyword = '', pageNumber = '') => {
  const response = await axios.get(
    `${API_URL}?keyword=${keyword}&pageNumber=${pageNumber}`
  );
  return response.data;
};

// Get single post
const getPostDetails = async (slug) => {
  const response = await axios.get(`${API_URL}/${slug}`);
  return response.data;
};

// Create post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

// Update post
const updatePost = async (postId, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}/${postId}`, postData, config);
  return response.data;
};

// Delete post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${postId}`, config);
  return response.data;
};

const blogService = {
  getPosts,
  getPostDetails,
  createPost,
  updatePost,
  deletePost,
};

export default blogService;