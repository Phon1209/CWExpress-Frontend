import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import Information from "../layouts/information";
import PageHeader from "../layouts/pageHeader";
import { IoArrowBack } from "react-icons/io5";
import { useAppContext } from "../../context/appContext";
import { Axios } from "../../config/config";
import Loading from "../utils/loading";
import Countdown from "../utils/countdown";

const ConfirmationPage = (props) => {
  console.log("Rendering Confirmation Page");

  const {
    machine,
    payment,
    responseData,
    executeAction,
    setLoading,
    isLoading,
  } = useAppContext();
  const { state } = useLocation();
  const { _id } = state;

  const navigate = useNavigate();

  useEffect(() => {
    // @TODO: request QR code
    try {
      console.log("QRCODE asked");
      setLoading();
      executeAction(payment.action, _id, payment.amount);
    } catch (err) {
      console.error(err);
    }
    // eslint-disable-next-line
  }, []);

  // /*
  // @TODO: polling data from "/order/check"
  useEffect(() => {
    // polling every 10 seconds
    const pollingRate = 10;
    const polling = setInterval(() => {
      var data = JSON.stringify({
        ref1: responseData.refs.ref1,
        ref2: responseData.refs.ref2,
        machineID: _id,
      });

      var config = {
        method: "post",
        url: "/order/check",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
        json: true,
      };
      console.log("Polling: ", data);
      Axios(config)
        .then(function (response) {
          // @TODO: Change this to navigate to success
          console.log(JSON.stringify(response.data));
          console.log(response);
          if (
            response.status === 200 &&
            response.data.amount === +responseData.amount
          ) {
            const { fulfilledAt, amount, transactionID } = response.data;
            navigate("/success", {
              state: {
                fulfilledAt,
                amount,
                payment: payment.name,
                transactionID,
              },
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }, pollingRate * 1000);

    return () => clearInterval(polling);
    // eslint-disable-next-line
  }, [responseData]);
  // */

  console.log("isLoading: ", isLoading);

  // Rendering
  // User refresh the page
  if (machine === null || payment === null) {
    return <Navigate to={`/machines/${_id}`} replace />;
  }

  // data is being fetched
  if (isLoading) return <Loading />;

  return (
    <div
      className="flex flex-col items-center 
                h-full w-full mx-8"
    >
      <div
        className="self-start flex mt-6 mb-4 items-center"
        onClick={() => {
          navigate(`/machines/${_id}`);
        }}
      >
        <IoArrowBack className="text-xl mr-3" />
        <PageHeader content="การจ่ายเงิน" classes="" />
      </div>
      {responseData && (
        <>
          <img
            className="my-2 w-64 h-64 bg-black"
            src={`data:image/png;base64, ${responseData.base64QR.qrImage}`}
            alt="Red dot"
          />
          <Information
            datas={[
              { title: "ไปยังบัญชี", content: "นายพล เลิศสุธากุล" },
              {
                title: "จำนวนเงิน",
                content: (+responseData.amount).toFixed(2),
              },
              { title: "Ref1 Number", content: responseData.refs.ref1 },
              { title: "ช่องทางการชำระเงิน", content: "Test" },
            ]}
            // titleColor={}
          />
          <p className="my-auto text-center">
            โปรดชำระเงินภายใน{" "}
            <Countdown
              startTime={300}
              endCallback={() => navigate(`/machines/${_id}`)}
            />{" "}
            วินาที
          </p>
        </>
      )}
    </div>
  );
};

export default ConfirmationPage;
