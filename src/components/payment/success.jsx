import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppContext } from "../../context/appContext";
import Information from "../layouts/information";
import PageHeader from "../layouts/pageHeader";
import Button from "../utils/button";
import SuccessImage from "../utils/assets/success.svg";

const SuccessPayment = (props) => {
  const { reset } = useAppContext();

  // const { machine } = useAppContext();
  // const { state } = useLocation();
  const navigate = useNavigate();

  const machine = {
    location: "Test",
    branch: "Test",
    machineNumber: 0,
    _id: 2,
  };
  const state = {
    fulfilledAt: "19/04/2022 12:43",
    amount: "10",
    payment: "Test QR Code",
    transactionID: "h87f34",
  };

  const { fulfilledAt, amount, payment: paymentMethod, transactionID } = state;
  const { location, branch, machineNumber, _id } = machine;

  return (
    <div
      className="flex flex-col items-center 
              h-full w-full"
    >
      <img src={SuccessImage} alt="Payment Success" className="mt-6 mb-4" />

      <section className="w-full py-4 flex flex-col items-center bg-primary50">
        <PageHeader content="ชำระเงินสำเร็จ" classes="mb-1" />
        <p>#{transactionID}</p>
      </section>
      <section>
        <Information
          datas={[
            { title: "เวลา", content: fulfilledAt },
            { title: "จำนวนเงิน", content: `${amount} บาท` },
            { title: "ช่องทางการชำระเงิน", content: paymentMethod },
          ]}
          titleColor="primary500"
          lightTitle={true}
        />
      </section>

      <section className="mt-11 flex flex-col items-center mb-4">
        <span className="font-semibold text-base">รายละเอียดเครื่อง</span>
        <Information
          datas={[
            { title: "จังหวัด", content: location },
            { title: "สาขา", content: branch },
            { title: "หมายเลขเครื่อง", content: machineNumber },
          ]}
          classes="mt-4"
          lightTitle={true}
        />
      </section>
      <section className="px-8 w-full flex justify-around mt-auto">
        <Button
          classes="btn-outline py-2 w-full mx-2"
          content="กลับไปหน้าหลัก"
          onClick={() => {
            reset();
            navigate("/", { replace: true });
          }}
        />
        <Button
          classes="btn-fill py-2 w-full mx-2"
          content="ใช้งานอีกครั้ง"
          onClick={() => navigate(`/machines/${_id}`)}
        />
      </section>
    </div>
  );
};

export default SuccessPayment;
