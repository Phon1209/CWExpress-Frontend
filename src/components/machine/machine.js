import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Machine = () => {
  // extract params from the URL
  const { machineID } = useParams();

  const [machineData, setMachineData] = useState(null);

  useEffect(() => {
    console.count(machineID);
    const link = `${process.env.REACT_APP_CWEX_URL}/cwex/v1/machines/${machineID}`;
    console.log(link);
    axios
      .get(link)
      .then((res) => {
        setMachineData(res.data);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, [machineID]);

  return !machineData ? (
    <h1>Spinning</h1>
  ) : (
    <div>
      <h1>
        Machine ID: <span>{machineData._id}</span>
      </h1>
      <p>
        สาขา: <span>{machineData.location}</span>
      </p>
      <p>
        หมายเลขเครื่อง: <span>{machineData.machineNumber}</span>
      </p>
    </div>
  );
};

export default Machine;
