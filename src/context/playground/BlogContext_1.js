import React, { useReducer } from 'react';

const BlogContext = React.createContext();

function blogReducer(state, action) {
  switch(action.type) {
    case 'ADD_BLOGPOST': {
      return [
        ...state,
        action.payload
      ]
    }
    default:
      return state;
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  function addBlogPost() {
    dispatch({type: 'ADD_BLOGPOST', payload: { title: `My blog post #${blogPosts.length + 1}` }})
  }

  return <BlogContext.Provider
    value={{
      data: blogPosts,
      addBlogPost
    }}
  >
    {children}
  </BlogContext.Provider>
}

export default BlogContext;