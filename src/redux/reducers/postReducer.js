const ADD = 'ADD';

export const showInfo = (post) => {
  return {
    type: ADD,
    post,
  }
}

const initialPostState = {
  currentPost: {},
};

const postReducer = (postState = initialPostState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...postState,
        currentPost: action.post,
      }
  
    default:
      return postState;
  }
}

export default postReducer;