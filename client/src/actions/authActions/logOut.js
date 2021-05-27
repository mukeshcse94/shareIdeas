import { LOG_OUT } from "../../types/authTypes";
export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
