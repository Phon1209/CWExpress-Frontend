import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MachineData from "./machineData";
import Loading from "../utils/loading";

const Machine = () => {
  // extract params from the URL
  const { machineID } = useParams();

  const [machineData, setMachineData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const link = `${process.env.REACT_APP_CWEX_URL}/cwex/v1/machines/${machineID}`;
    console.log(link);
    // axios
    //   .get(link)
    //   .then((res) => {
    //     setLoading(false);
    //     setMachineData(res.data);
    //   })
    //   .catch((err) => {
    //     setLoading(false);

    //     console.error(err);
    //   });
    // Set temporary machineData
    setMachineData({
      _id: machineID,
      location: "Chachoengsao",
      branch: "PTT-TV",
      machineNumber: 1,
    });
    setLoading(false);
  }, [machineID]);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-full w-full justify-center items-center">
      {machineData ? (
        <>
          <header className="page-header m-6">ยืนยันการเลือกเครื่อง</header>
          <div className="w-56 h-56 bg-black"></div>
          <sub className="font-normal text-lg m-8 mb-2">
            คุณต้องการใช้เครื่องนี้ใช่ไหม
          </sub>
          <MachineData {...machineData} />
          <div className="mt-auto flex justify-around w-full max-w-md">
            <Link to="/">
              <button className="btn btn-text">ยกเลิก</button>
            </Link>
            <button
              className="btn btn-filled"
              onClick={() => {
                navigate("/payment", { state: { ...machineData } });
              }}
            >
              ยืนยัน
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-center text-2xl">
          No Machine Found with an ID {machineID}
        </h1>
      )}
    </div>
  );
};

export default Machine;
