import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";

import "./Clothes.css";

function Clothes() {
  return <div className="clothes"></div>;
}

Clothes.propTypes = {
  limit: PropTypes.number,
};

export default Clothes;
