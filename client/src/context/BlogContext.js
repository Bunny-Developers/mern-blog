import useState from 'react';
import { createContext, useContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
);
};

export const useBlog = () => {
  return useContext(BlogContext);
  };
