import React from "react";
import PropTypes from "prop-types";

const PaymentOptions = ({ paymentChoice, payChoice, setPayChoice }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 w-full gap-2">
      {paymentChoice.map((choice, index) => {
        return (
          <div
            key={index}
            className="paymentChoice"
            onClick={() =>
              setPayChoice({
                name: choice.name,
                action: choice.action,
              })
            }
          >
            <label
              className={`flex flex-col items-center justify-around p-4 rounded-md border-2
                        ${
                          payChoice.name === choice.name
                            ? "bg-primary text-white"
                            : ""
                        }`}
            >
              {choice.icon}
              <p
                className={`${
                  payChoice.name === choice.name ? "text-white" : "text-primary"
                } pt-1`}
              >
                {choice.name}
              </p>
            </label>
          </div>
        );
      })}
    </div>
  );
};

PaymentOptions.propTypes = {
  paymentChoice: PropTypes.array,
};

export default PaymentOptions;
