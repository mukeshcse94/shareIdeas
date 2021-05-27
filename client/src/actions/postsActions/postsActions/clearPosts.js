import { CLEAR_POSTS, POST_ERROR } from "../../../types/postsTypes";

export const clearPosts = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_POSTS });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
