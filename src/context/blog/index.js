import createDataContext from '../createDataContext';

const blogReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BLOGPOST': 
      return [...state, action.payload];
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

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
)