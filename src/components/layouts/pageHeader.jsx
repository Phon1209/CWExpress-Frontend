import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ content, classes }) => {
  return <header className={`page-header ${classes}`}>{content}</header>;
};

PageHeader.propTypes = {
  content: PropTypes.string,
  classes: PropTypes.string,
};

export default PageHeader;
