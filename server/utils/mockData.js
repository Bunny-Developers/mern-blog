// Mock data for testing without a database
let users = [
  {
    _id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: '$2a$10$8K1p/a0dURXAm7QiTRqNa.E3YPWsKGHoa4Dj95HyLv2IVc4JiLsYe', // password: admin123
    isAdmin: true,
    avatar: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    password: '$2a$10$8K1p/a0dURXAm7QiTRqNa.E3YPWsKGHoa4Dj95HyLv2IVc4JiLsYe', // password: admin123
    isAdmin: false,
    avatar: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

let posts = [
  {
    _id: '1',
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    excerpt: 'Learn the basics of React and how to get started with your first application',
    content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.',
    featuredImage: '',
    codeBlocks: [],
    isPublished: true,
    author: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    title: 'Advanced JavaScript Techniques',
    slug: 'advanced-javascript-techniques',
    excerpt: 'Explore advanced JavaScript patterns and techniques for experienced developers',
    content: 'JavaScript is a versatile programming language that powers the modern web.',
    featuredImage: '',
    codeBlocks: [],
    isPublished: true,
    author: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

let nextUserId = 3;
let nextPostId = 3;

export const getUsers = () => users;
export const getPosts = () => posts;
export const getUserById = (id) => users.find(user => user._id === id);
export const getUserByEmail = (email) => users.find(user => user.email === email);
export const getPostById = (id) => posts.find(post => post._id === id);
export const getPostBySlug = (slug) => posts.find(post => post.slug === slug);
export const addUser = (user) => {
  const newUser = { ...user, _id: nextUserId.toString(), createdAt: new Date(), updatedAt: new Date() };
  users.push(newUser);
  nextUserId++;
  return newUser;
};
export const addPost = (post) => {
  const newPost = { ...post, _id: nextPostId.toString(), createdAt: new Date(), updatedAt: new Date() };
  posts.push(newPost);
  nextPostId++;
  return newPost;
};
export const updateUser = (id, updates) => {
  const userIndex = users.findIndex(user => user._id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updates, updatedAt: new Date() };
    return users[userIndex];
  }
  return null;
};
export const updatePost = (id, updates) => {
  const postIndex = posts.findIndex(post => post._id === id);
  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], ...updates, updatedAt: new Date() };
    return posts[postIndex];
  }
  return null;
};
export const deleteUser = (id) => {
  users = users.filter(user => user._id !== id);
};
export const deletePost = (id) => {
  posts = posts.filter(post => post._id !== id);
};