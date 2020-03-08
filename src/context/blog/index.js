import createDataContext from '../createDataContext';
import jsonServer from '../../api/jsonServer';

const blogReducer = (state, action) => {
  switch(action.type) {
    case 'GET_BLOGPOSTS':
      return action.payload;
    case 'EDIT_BLOGPOST': 
      return state.map((item) => item.id === action.payload.id ? action.payload : item);
    case 'DELETE_BLOGPOST': 
      return state.filter((item) => item.id !== action.payload);
    default: 
      return state;
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'GET_BLOGPOSTS', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return async (payload, callback) => {
    await jsonServer.post('/blogposts', payload);
    // dispatch({ type: 'ADD_BLOGPOST', payload });
    if(callback) callback();
  }  
};

const editBlogPost = dispatch => {
  return (payload, callback) => {
    dispatch({ type: 'EDIT_BLOGPOST', payload });
    if(callback) callback();
  }  
};

const deleteBlogPost = dispatch => {
  return async (payload) => {
    await jsonServer.delete(`/blogposts/${payload}`);
    dispatch({ type: 'DELETE_BLOGPOST', payload })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    deleteBlogPost,
    editBlogPost
  },
  []
)