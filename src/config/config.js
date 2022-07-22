import axios from "axios";

const SERVER_URL =
  process.env.REACT_APP_MODE === "development"
    ? process.env.REACT_APP_CWEX_LOCAL
    : process.env.REACT_APP_CWEX_SERVER;

export const Axios = axios.create({ baseURL: `${SERVER_URL}/cwex/v1` });
