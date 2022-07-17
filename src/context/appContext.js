import { createContext, useReducer, useEffect, useContext } from "react";
import { Axios, ssEvents } from "../config/config";
import { LOADING, SET_MACHINE } from "./actions";
import { appReducer } from "./appReducer";

const initialState = {
  isLoading: true,
  machine: null,
  payment: null,
};

export const AppContext = createContext(initialState);

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Set up sse functions
  useEffect(() => {
    // add event
    ssEvents.addEventListener("message", (e) => {
      console.log("Incoming: ", e);
    });

    // listen to open event
    ssEvents.onopen = (e) => {
      console.log(e);
    };
    // listen to error event
    ssEvents.onerror = (e) => {
      console.log(e);
    };

    return () => {
      ssEvents.close();
    };
    // eslint-disable-next-line
  }, []);

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

  return (
    <AppContext.Provider value={{ ...state, getMachine }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
