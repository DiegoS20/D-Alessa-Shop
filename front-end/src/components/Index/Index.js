import React from "react";
import Clothes from "../Clothes/Clothes";
import { ITEMS } from "./DatosPrueba";

import "./Index.css";

function Index() {
  return (
    <div className="main">
      <div className="head">D'alessa Shop</div>
      <div className="content">
        <Clothes items={ITEMS} limit={10}></Clothes>
      </div>
    </div>
  );
}
export default Index;
