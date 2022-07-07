import React from "react";
import { useLocation, Navigate } from "react-router";

const Payment = () => {
  console.log("rendering payment");

  const { state } = useLocation();

  // Back to firt page if not come from machine confirmation page
  if (state === null) {
    return <Navigate to="/" replace />;
  }
  const { _id, location, branch, machineNumber } = state;

  return <div>Payment with {_id}</div>;
};

export default Payment;
