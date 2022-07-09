import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../utils/loading";
import PageHeader from "../layouts/pageHeader";
import Button from "../utils/button";
import Information from "../layouts/information";

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
    axios
      .get(link)
      .then((res) => {
        setLoading(false);
        setMachineData(res.data);
      })
      .catch((err) => {
        setLoading(false);

        console.error(err);
      });
  }, [machineID]);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-full w-full justify-center items-center">
      {machineData ? (
        <>
          <PageHeader content="ยืนยันการเลือกเครื่อง" classes="m-6" />
          <div className="w-56 h-56 bg-black"></div>
          <sub className="font-normal text-lg m-8 mb-2">
            คุณต้องการใช้เครื่องนี้ใช่ไหม
          </sub>
          <Information
            datas={[
              { title: "จังหวัด", content: machineData.location },
              { title: "สาขา", content: machineData.branch },
              { title: "หมายเลขเครื่อง", content: machineData.machineNumber },
            ]}
          />
          <div className="mt-auto flex justify-around w-full max-w-md">
            <Link to="/">
              <Button classes="btn-text" content="ยกเลิก" />
            </Link>
            <Button
              classes="btn-fill"
              onClick={() => {
                navigate("/payment", { state: { ...machineData } });
              }}
              content="ยืนยัน"
            />
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
