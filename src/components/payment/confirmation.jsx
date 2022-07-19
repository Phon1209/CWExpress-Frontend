import React, { useEffect, useState } from "react";
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

  const { machine, payment, executeAction, isLoading } = useAppContext();
  const { state } = useLocation();
  const { _id } = state;

  const [information, setInformation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let QRgenerated = false;

    if (machine === null || payment === null) return;
    // @TODO: request QR code
    if (payment.name === "QRCode") {
      const fetchQR = async () => {
        const res = await executeAction(payment.action, _id, payment.amount);
        if (!QRgenerated) {
          setInformation(res);
        }
      };

      fetchQR().catch(console.error);
    }

    return () => (QRgenerated = true);
    // eslint-disable-next-line
  }, []);

  // @TODO: SSE to redirect to success page
  useEffect(() => {
    if (!information) return;
    const source = new EventSource(STREAM_URL);

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });

    source.addEventListener("message", (e) => {
      const transactionResponse = e.data;
      const transactionData = JSON.parse(transactionResponse);
      console.log(transactionData);

      if (transactionData && information) {
        if (+transactionData.amount !== +information.amount) {
          return;
        }
        if (transactionData.ref1 !== information.refs.ref1) {
          return;
        }
        if (transactionData.ref2 !== information.refs.ref2) {
          return;
        }
        if (transactionData.ref3 !== "CWEX") {
          return;
        }
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
  }, [information, navigate]);

  console.log("isLoading: ", isLoading);

  // Rendering
  if (machine === null || payment === null) {
    return <Navigate to="/machines/2" replace />;
    // return <Navigate to="/" replace />;
  }
  if (isLoading || information === null) return <Loading />;

  return (
    <div
      className="flex flex-col items-center 
                h-full w-full"
    >
      <div className="self-start flex mt-6 mb-4 items-center">
        <IoArrowBack className="text-xl mr-3" />
        <PageHeader content="การจ่ายเงิน" classes="" />
      </div>
      {information && (
        <>
          <img
            className="my-2 w-64 h-64 bg-black"
            src={`data:image/png;base64, ${information.base64QR.qrImage}`}
            alt="Red dot"
          />
          <Information
            datas={[
              { title: "ไปยังบัญชี", content: "นายพล เลิศสุธากุล" },
              { title: "จำนวนเงิน", content: (+information.amount).toFixed(2) },
              { title: "Ref1 Number", content: information.refs.ref1 },
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
