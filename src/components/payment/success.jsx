import React from "react";
import PropTypes from "prop-types";
import PageHeader from "../layouts/pageHeader";

const SuccessPayment = (props) => {
  // @TODO: Create this page
  return (
    <div
      className="flex flex-col items-center 
              h-full w-full"
    >
      <PageHeader classes="mt-6 mb-4" content="Payment Successful" />
    </div>
  );
};

SuccessPayment.propTypes = {};

export default SuccessPayment;
