import React from "react";
import PropTypes from "prop-types";

const MachineData = ({ _id, location, branch, machineNumber }) => {
  return (
    <div className="flex flex-col text-center bg-white rounded-xl py-4">
      <h1 className="block p-4">
        Machine ID: <span>{_id}</span>
      </h1>
      <p className="block">
        สาขา:{" "}
        <span>
          {location} - {branch}
        </span>
      </p>
      <p className="block">
        หมายเลขเครื่อง: <span>{machineNumber}</span>
      </p>
    </div>
  );
};

MachineData.propTypes = {
  _id: PropTypes.number,
  location: PropTypes.string,
  branch: PropTypes.string,
  machineNumber: PropTypes.number,
};

export default MachineData;
