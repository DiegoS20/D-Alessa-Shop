import React from "react";
// import Clothes from "../Clothes/Clothes";
import Item from "../Item/Item";

import "./Index.css";

function Index() {
  const info = {
    desc: "This is a false description",
    img:
      "https://i.pinimg.com/474x/a8/e3/9b/a8e39b287c7cd7af410dc230c36c226f.jpg",
    price: 10.0,
    offer: 35.75,
    sold: 100,
    shipping: 1.5,
  };

  return (
    <div className="main">
      <div className="head">
        {/* 
        Aqui irá información inicial, como un slider o una sola imagen con ofertas y cosas así
        */}
        D'alessa Shop
      </div>
      <div className="content">
        <Item info={info}></Item>
      </div>
    </div>
  );
}
export default Index;
