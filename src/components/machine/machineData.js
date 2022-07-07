import React from "react";
import PropTypes from "prop-types";

const MachineData = ({ _id, location, branch, machineNumber }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-y-1 gap-x-5 mt-8 mb-4">
      <div className="text-right text-[#325D67]">จังหวัด</div>
      <div className="text-left">{location}</div>
      <div className="text-right text-[#325D67]">สาขา</div>
      <div className="text-left">{branch}</div>
      <div className="text-right text-[#325D67]">หมายเลขเครื่อง</div>
      <div className="text-left">{machineNumber}</div>
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
