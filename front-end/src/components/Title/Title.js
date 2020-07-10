import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="title">
      <div className="t-de">
        <div className="t-de-c"></div>
      </div>
      <div className="txt">{props.title}</div>
      <div className="t-de">
        <div className="t-de-c"></div>
      </div>
    </div>
  );
}
export default Title;
