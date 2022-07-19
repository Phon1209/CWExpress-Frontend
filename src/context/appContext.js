import { createContext, useReducer, useContext } from "react";
import { Axios } from "../config/config";
import {
  LOADING,
  PAYMENT_FAIL,
  SET_MACHINE,
  SET_PAYMENT,
  SET_RESPONSE,
} from "./actions";
import { appReducer } from "./appReducer";

const initialState = {
  isLoading: true,
  machine: null,
  payment: null,
  error: null,
  responseData: null,
};

export const AppContext = createContext(initialState);

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Get Machine
  const getMachine = async (machineID) => {
    dispatch({ type: LOADING });

    const link = `/machines/${machineID}`;
    await Axios.get(link)
      .then((res) => {
        dispatch({ type: SET_MACHINE, payload: { machine: res.data } });
      })
      .catch((err) => {
        dispatch({ type: SET_MACHINE, payload: { machine: null } });
      });
  };
  const setMachine = (machine) => {
    dispatch({ type: SET_MACHINE, payload: { machine } });
  };

  const setPayChoice = (choice) => {
    dispatch({
      type: SET_PAYMENT,
      payload: { payment: { name: choice.name, action: choice.action } },
    });
  };
  const setAmount = (amount) => {
    dispatch({
      type: SET_PAYMENT,
      payload: { payment: { amount } },
    });
  };

  const executeAction = async (action, machineID, amount) => {
    dispatch({ type: LOADING });

    try {
      const data = await action(machineID, amount);
      dispatch({ type: SET_RESPONSE, payload: data });
      return data;
    } catch (err) {
      dispatch({ type: PAYMENT_FAIL, payload: err });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getMachine,
        setMachine,
        setPayChoice,
        setAmount,
        executeAction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
