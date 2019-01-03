import React from "react";

const Information = props => {
  const info = props.info.map(res => {
    return (
      <div className="info" key={res.id}>
        <h5>
          <img src={res.icon} alt="icon" /> {res.label}: {res.text}
        </h5>
      </div>
    );
  });
  return <div className="information">{info}</div>;
};

export default Information;
