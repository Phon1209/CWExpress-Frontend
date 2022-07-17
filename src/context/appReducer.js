import {
  SET_PAYMENT,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
  SET_MACHINE,
} from "./actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_MACHINE:
      const { machine } = action.payload;
      return { ...state, isLoading: false, machine };
    case SET_PAYMENT:
      const { payment } = action.payload;
      return {
        ...state,
        isLoading: false,
        payment: { ...state.payment, ...payment },
      };
    case PAYMENT_SUCCESS:
      return { ...state };
    case PAYMENT_FAIL:
      return { ...state };
    default:
      return state;
  }
};
