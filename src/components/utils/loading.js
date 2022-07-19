import React from "react";
import loading from "./assets/loading.svg";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={loading} alt="loading..." className="w-20 h-20 m-auto"></img>
    </div>
  );
};

export default Loading;
