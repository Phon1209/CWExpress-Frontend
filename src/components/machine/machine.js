import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MachineData from "./machineData";
import Loading from "../utils/loading";

const Machine = () => {
  // extract params from the URL
  const { machineID } = useParams();

  const [machineData, setMachineData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.count(machineID);
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
    // eslint-disable-next-line
  }, [machineID]);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-full w-full justify-center">
      {machineData ? (
        <>
          <MachineData {...machineData} />
          <h1 className="rounded-xl p-8 m-12 bg-secondary text-center text-primary text-xl font-bold">
            Button
          </h1>
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
