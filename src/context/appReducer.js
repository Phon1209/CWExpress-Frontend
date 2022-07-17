import {
  GET_MACHINE,
  SET_PAYMENT,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
} from "./actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case GET_MACHINE:
      const { machine } = action.payload;
      return { ...state, isLoading: false, machine };
    case SET_PAYMENT:
      const { payment } = action.payload;
      return { ...state, isLoading: false, payment };
    case PAYMENT_SUCCESS:
      return { ...state };
    case PAYMENT_FAIL:
      return { ...state };
    default:
      return state;
  }
};
