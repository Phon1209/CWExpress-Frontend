import { createContext, useReducer, useEffect, useContext } from "react";
import { ssEvents } from "../config/config";
import { appReducer } from "./appReducer";

const initialState = {
  isLoading: true,
  machine: null,
  payment: null,
};

export const AppContext = createContext(initialState);

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
