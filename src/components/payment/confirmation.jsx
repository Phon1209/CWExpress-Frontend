import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import Information from "../layouts/information";
import PageHeader from "../layouts/pageHeader";
import { IoArrowBack } from "react-icons/io5";
import { useAppContext } from "../../context/appContext";
import { STREAM_URL } from "../../config/config";
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
  // @TODO: SSE to redirect to success page
  useEffect(() => {
    if (!responseData)
      return () => {
        console.log("Not open sse");
      };
    console.count("Trying to connect to sse");
    const source = new EventSource(STREAM_URL);

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });

    source.addEventListener("message", (e) => {
      const transactionResponse = e.data;
      const transactionData = JSON.parse(transactionResponse);
      console.log(transactionData);

      if (transactionData && responseData) {
        if (+transactionData.amount !== +responseData.amount) {
          return;
        }
        if (transactionData.ref1 !== responseData.refs.ref1) {
          return;
        }
        if (transactionData.ref2 !== responseData.refs.ref2) {
          return;
        }
        if (transactionData.ref3 !== "CWEX") {
          return;
        }
        if (transactionData.machineID !== _id) return;
        navigate("/success", { replace: true });
      }
    });

    source.addEventListener("error", (e) => {
      console.error("Error: ", e);
      source.close();
    });

    return () => {
      source.close();
    };
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
                h-full w-full"
    >
      <div className="self-start flex mt-6 mb-4 items-center">
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
