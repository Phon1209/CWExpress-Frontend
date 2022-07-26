import React from "react";
import { useAppContext } from "../../context/appContext";
import { AiFillInfoCircle } from "react-icons/ai";

const Alert = () => {
  const { alert } = useAppContext();

  return (
    alert && (
      <div className={`alert alert-${alert.type} w-full`}>
        <AiFillInfoCircle className="w-5 h-5" />
        <span className="ml-4">{alert.content}</span>
      </div>
    )
  );
};

export default Alert;
