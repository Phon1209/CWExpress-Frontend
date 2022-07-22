import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../utils/loading";
import PageHeader from "../layouts/pageHeader";
import Button from "../utils/button";
import Information from "../layouts/information";
import { useAppContext } from "../../context/appContext";

const Machine = () => {
  // extract params from the URL
  const { machineID } = useParams();

  const appContext = useAppContext();
  const { machine, isLoading, getMachine } = appContext;

  const navigate = useNavigate();
  useEffect(() => {
    getMachine(machineID);
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-full w-full justify-center items-center mx-8">
      {machine ? (
        <>
          <PageHeader content="ยืนยันการเลือกเครื่อง" classes="m-6" />
          <div className="w-56 h-56 bg-black"></div>
          <sub className="font-normal text-lg m-8 mb-2">
            คุณต้องการใช้เครื่องนี้ใช่ไหม
          </sub>
          <Information
            datas={[
              { title: "จังหวัด", content: machine.location },
              { title: "สาขา", content: machine.branch },
              { title: "หมายเลขเครื่อง", content: machine.machineNumber },
            ]}
          />
          <div className="mt-auto flex justify-around w-full max-w-md">
            <Link to="/">
              <Button classes="btn-text" content="ยกเลิก" />
            </Link>
            <Button
              classes="btn-fill"
              onClick={() => {
                navigate("/payment", { state: { ...machine } });
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
