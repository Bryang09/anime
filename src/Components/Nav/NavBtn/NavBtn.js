import React from "react";

import "./NavBtn.scss";

const NavBtn = props => {
  return (
    <div
      className="NavBtn"
      onClick={props.onWidth}
      // style={
      //   props.width
      //     ? {
      //         border: "2px solid #fff",
      //         alignItems: "center"
      //       }
      //     : null
      // }
    >
      <div
        className="navLine"
        id="line1"
        style={
          props.width
            ? { transform: "rotate(45deg) translate(0, 5px)", width: "80%" }
            : null
        }
      />
      <div
        className="navLine"
        id="line2"
        style={props.width ? { display: "none" } : null}
      />
      <div
        className="navLine"
        id="line3"
        style={
          props.width
            ? {
                transform: "rotate(-45deg) translate(0, -5px)",
                width: "80%"
              }
            : null
        }
      />
    </div>
  );
};

export default NavBtn;
