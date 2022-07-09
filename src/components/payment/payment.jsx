import React, { useState } from "react";
import { useLocation, Navigate } from "react-router";
import AmountSelect from "./amountSelect";
import paymentChoice from "./paymentChoice";
import PaymentOptions from "./paymentOptions";
import PageHeader from "../layouts/pageHeader";
import Button from "../utils/button";

const Payment = () => {
  console.log("rendering payment");

  const { state } = useLocation();
  const [amount, setAmount] = useState(null);
  const [payChoice, setPayChoice] = useState(null);

  // Back to firt page if not come from machine confirmation page
  if (state === null) {
    return <Navigate to="/" replace />;
  }
  const { _id, machineNumber } = state;

  return (
    <div
      className="flex flex-col items-start 
                h-full w-full"
    >
      <PageHeader classes="mt-6 mb-4" content="รายละเอียดการใช้งาน" />
      <section className="font-medium text-lg grid grid-cols-2 leading-5 my-3 gap-2">
        <div className="mr-5">หมายเลขเครื่อง</div>
        <p>{machineNumber}</p>
        <div className="mr-5">รหัสประจำเครื่อง</div>
        <p>{_id}</p>
      </section>
      <AmountSelect setAmount={setAmount} amount={amount} />
      <section className="w-full mb-4">
        <header className="font-medium text-lg leading-5 my-3">
          ช่องทางชำระเงิน
        </header>
        <PaymentOptions
          paymentChoice={paymentChoice}
          payChoice={payChoice}
          setPayChoice={setPayChoice}
        />
      </section>
      <Button
        content="ยืนยัน"
        classes="btn-fill w-full mt-auto"
        onClick={() => {
          if (payChoice !== null && amount !== null && amount !== 0)
            payChoice.action(amount);
        }}
      />
    </div>
  );
};

export default Payment;
