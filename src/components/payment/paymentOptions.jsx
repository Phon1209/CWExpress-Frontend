import React from "react";
import PropTypes from "prop-types";
import paymentChoice from "./paymentChoice";
import { useAppContext } from "../../context/appContext";

const PaymentOptions = ({ currentChoice }) => {
  const { setPayChoice } = useAppContext();

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
                          currentChoice === choice.name
                            ? "bg-primary text-white"
                            : ""
                        }`}
            >
              {choice.icon}
              <p
                className={`${
                  currentChoice === choice.name ? "text-white" : "text-primary"
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
