import React from "react";

import "./Pagination.scss";

const Pagination = props => {
  console.log(props);
  return (
    <div className="Pagination">
      <div className="options">
        <h5
          className={props.page1 ? "bg" : props.page2 ? "normal" : null}
          onClick={props.onPage1}
        >
          1
        </h5>
        <h5
          id="two"
          className={props.page2 ? "bg" : null}
          onClick={props.onPage2}
        >
          2
        </h5>
      </div>
    </div>
  );
};

export default Pagination;
