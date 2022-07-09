import React from "react";
import PropTypes from "prop-types";

const Button = ({ classes, onClick, content }) => {
  return (
    <button className={"btn " + classes} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
