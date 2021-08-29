import { ACTION_TYPES } from "../helpers/utils";

const initialState = { details: null };

const userReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.AUTH:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default userReducer;
