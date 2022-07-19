import React, { useEffect } from "react";
import { useLocation, Navigate, useNavigate } from "react-router";
import AmountSelect from "./amountSelect";
import PaymentOptions from "./paymentOptions";
import PageHeader from "../layouts/pageHeader";
import Button from "../utils/button";
import { useAppContext } from "../../context/appContext";

const Payment = () => {
  const { state } = useLocation();

  const { payment, setAmount, setMachine } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (state !== null) setMachine(state);
    // eslint-disable-next-line
  }, [state]);

  // Back to first page if not come from machine confirmation page
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
      <AmountSelect setAmount={setAmount} amount={payment?.amount} />
      <section className="w-full mb-4">
        <header className="font-medium text-lg leading-5 my-3">
          ช่องทางชำระเงิน
        </header>
        <PaymentOptions currentChoice={payment?.name} />
      </section>
      <Button
        content="ยืนยัน"
        classes="btn-fill w-full mt-auto"
        onClick={() => {
          if (
            payment !== null &&
            payment.name !== null &&
            payment.name !== undefined &&
            payment.amount !== null &&
            payment.amount !== undefined &&
            +payment.amount !== 0
          ) {
            console.log(payment.name);
            console.log(payment.amount);
            navigate("/confirm", { state: { _id } });
          } else {
            // @TODO: change this to nice alert
            alert("Please specify");
          }
        }}
      />
    </div>
  );
};

export default Payment;
