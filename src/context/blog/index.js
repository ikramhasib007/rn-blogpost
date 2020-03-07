import createDataContext from '../createDataContext';

const blogReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BLOGPOST': 
      return [...state, action.payload];
    case 'DELETE_BLOGPOST': 
      return state.filter((item) => item.id !== action.payload);
    default: 
      return state;
  }
}

const addBlogPost = dispatch => {
  return (payload) => dispatch({
    type: 'ADD_BLOGPOST',
    payload
  })  
};

const deleteBlogPost = dispatch => {
  return (payload) => dispatch({
    type: 'DELETE_BLOGPOST',
    payload
  })
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost
  },
  []
)