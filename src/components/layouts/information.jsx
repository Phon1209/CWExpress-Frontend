import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Information = ({ datas, classes, lightTitle }) => {
  return (
    <section
      className={`grid grid-cols-2 grid-rows-3 gap-y-1 gap-x-5 mt-8 mb-4 ${classes}`}
    >
      {datas.map((data) => {
        return (
          <Fragment key={data.title}>
            <div
              key={data.title + "-title"}
              className={`text-right ${
                lightTitle ? "text-primary500" : "text-primary600"
              }`}
            >
              {data.title}
            </div>
            <div key={data.title + "-content"} className="text-left">
              {data.content}
            </div>
          </Fragment>
        );
      })}
    </section>
  );
};

Information.defaultProps = {
  lightTitle: false,
};

Information.propTypes = {
  datas: PropTypes.array.isRequired,
  classes: PropTypes.string,
  lightTitle: PropTypes.bool,
};

export default Information;
