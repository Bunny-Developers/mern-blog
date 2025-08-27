# MERN Blog - Full-Stack Blogging Platform

A modern, feature-rich blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring admin capabilities, image uploads, and code syntax highlighting.

![Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Database Models](#database-models)
- [API Endpoints](#api-endpoints)
- [Admin Panel](#admin-panel-features)
- [Deployment](#deployment)
- [Testing](#testing)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Acknowledgments](#acknowledgments)
- [Analytics & Monitoring](#analytics--monitoring)
- [Security Features](#security-features)
- [Performance Optimizations](#performance-optimizations)
- [FAQ](#faq)

---

## 🌟 Features

### ✨ Core Features
- **User Authentication & Authorization** - Secure login/register with JWT
- **Rich Text Editor** - WYSIWYG editor for blog posts with React Quill
- **Image Uploads** - Cloudinary integration for media management
- **Code Syntax Highlighting** - Beautiful code blocks with react-syntax-highlighter
- **Responsive Design** - Material-UI components for mobile-friendly interface
- **Admin Dashboard** - Complete content management system

### 🎯 User Features
- User registration and profile management
- Blog post browsing and reading
- Course content access
- Comment system (planned)
- Search functionality

### 👑 Admin Features
- Complete CRUD operations for blog posts
- Course management and upload system
- User management panel
- Analytics dashboard
- Content moderation tools

---

## 🛠️ Tech Stack

### Frontend
- React 18 - UI framework
- Vite - Build tool and dev server
- Material-UI (MUI) - Component library
- React Router - Navigation
- React Quill - Rich text editor
- React Syntax Highlighter - Code display
- Formik & Yup - Form handling and validation
- Axios - HTTP client

### Backend
- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM for MongoDB
- JWT - Authentication
- bcryptjs - Password hashing
- Multer & Cloudinary - File uploads
- CORS - Cross-origin requests

### Deployment
- MongoDB Atlas - Cloud database
- Cloudinary - Media storage
- Vercel/Netlify - Frontend hosting
- Heroku/Railway - Backend hosting

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account
- Git

### Installation

**Clone the repository**
```bash
git clone https://github.com/your-username/mern-blog.git
cd mern-blog
```

**Setup Backend**
```bash
cd server
npm install
```

**Setup Frontend**
```bash
cd ../client
npm install
```

### Environment Configuration

Create `.env` files in both `server/` and `client/` directories:

**Server Environment (.env)**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-blog
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Client Environment (.env)**
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_NAME=MERN Blog
```

### Start Development Servers

**Terminal 1 - Backend**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend**
```bash
cd client
npm run dev
```

**Access the Application**
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## 📁 Project Structure

```
mern-blog/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── admin/      # Admin panel components
│   │   │   ├── blog/       # Blog-related components
│   │   │   └── common/     # Shared components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── vite.config.js      # Vite configuration
├── server/                 # Express backend
│   ├── config/             # Database and service configurations
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── uploads/            # Temporary file storage
│   └── utils/              # Utility functions
└── README.md
```

---

## 🗄️ Database Models

**User Model**
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  isAdmin: Boolean,
  avatar: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Post Model**
```javascript
{
  title: String,
  excerpt: String,
  content: String,
  featuredImage: String,
  codeBlocks: [{
    language: String,
    code: String
  }],
  author: ObjectId (ref: User),
  slug: String (unique),
  isPublished: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

**Course Model**
```javascript
{
  title: String,
  description: String,
  thumbnail: String,
  price: Number,
  isPublished: Boolean,
  lessons: [{
    title: String,
    content: String,
    videoUrl: String,
    duration: Number
  }],
  instructor: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

**Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

**Blog Posts**
- `GET /api/posts` - Get all published posts
- `GET /api/posts/:slug` - Get single post by slug
- `POST /api/posts` - Create new post (Admin only)
- `PUT /api/posts/:id` - Update post (Admin only)
- `DELETE /api/posts/:id` - Delete post (Admin only)

**Courses**
- `GET /api/courses` - Get all published courses
- `POST /api/courses` - Create new course (Admin only)
- `PUT /api/courses/:id` - Update course (Admin only)
- `DELETE /api/courses/:id` - Delete course (Admin only)

**Users**
- `GET /api/users` - Get all users (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

---

## 🎨 Admin Panel Features

**Dashboard**
- Statistics overview
- Recent activity feed
- Quick actions
- Analytics charts

**Post Management**
- Create/edit blog posts
- Rich text editor with image upload
- Code block insertion
- Post scheduling
- Draft management

**Course Management**
- Course creation wizard
- Lesson organization
- Video upload integration
- Pricing management

**User Management**
- User list with filtering
- Role management
- User activity monitoring
- Bulk actions

---

## 🚀 Deployment

**Frontend Deployment (Vercel)**
- Build the project: `npm run build`
- Deploy to Vercel: `vercel --prod`
- Set environment variables in Vercel dashboard

**Backend Deployment (Heroku)**
- Create Procfile: `web: node server.js`
- Deploy to Heroku: `git push heroku main`
- Set environment variables in Heroku dashboard

**Database Setup (MongoDB Atlas)**
- Create cluster in MongoDB Atlas
- Whitelist IP addresses
- Get connection string
- Set `MONGODB_URI` environment variable

**Cloudinary Setup**
- Create Cloudinary account
- Get API credentials
- Set environment variables:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`

---

## 🧪 Testing

**Running Tests**
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

**Test Coverage**
- API endpoint testing with Jest & Supertest
- Component testing with React Testing Library
- Integration testing for critical user flows

---

## 🔧 Configuration

**Environment Variables**
- See `.env.example` files in both client and server