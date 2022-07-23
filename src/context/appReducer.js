import {
  SET_PAYMENT,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
  SET_MACHINE,
  SET_RESPONSE,
  LOADING,
  RESET,
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
    case SET_RESPONSE:
      return { ...state, responseData: action.payload, isLoading: false };
    case PAYMENT_SUCCESS:
      return { ...state };
    case PAYMENT_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case LOADING:
      return { ...state, isLoading: true };
    case RESET:
      return {
        isLoading: true,
        machine: null,
        payment: null,
        error: null,
        responseData: null,
      };

    default:
      return state;
  }
};
