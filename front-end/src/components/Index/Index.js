import React from "react";
import ClothesProof from "../ClothesProof/ClothesProof";

import "./Index.css";

function Index() {
  return (
    <div className="main">
      <div className="head">
        {/* 
        Aqui irá información inicial, como un slider o una sola imagen con ofertas y cosas así
        */}
        D'alessa Shop
      </div>
      <div className="content">
        <ClothesProof></ClothesProof>
      </div>
    </div>
  );
}
export default Index;
