import React from "react";
import Category from "../Category/Category";
import Showcase from "../Showcase/Showcase";

import "./Index.css";

const CAT = [
  {
    name: "Mujeres",
    description:
      "¡Encuentra la mejor variedad en prendas de mujeres! Tenemos lo que estás buscando para sentirte a la moda",
    image: "http://lorempixel.com/500/500",
  },
  {
    name: "Mujeres",
    description:
      "¡Encuentra la mejor variedad en prendas de mujeres! Tenemos lo que estás buscando para sentirte a la moda",
    image: "http://lorempixel.com/500/500",
  },
  {
    name: "Mujeres",
    description:
      "¡Encuentra la mejor variedad en prendas de mujeres! Tenemos lo que estás buscando para sentirte a la moda",
    image: "http://lorempixel.com/500/500",
  },
  {
    name: "Mujeres",
    description:
      "¡Encuentra la mejor variedad en prendas de mujeres! Tenemos lo que estás buscando para sentirte a la moda",
    image: "http://lorempixel.com/500/500",
  },
];

function Index() {
  return (
    <div className="main">
      <div className="head">D'alessa Shop</div>
      <div className="content">
        <Showcase
          items={CAT}
          product={Category}
          title="Tenemos todo lo que buscas"
        ></Showcase>
      </div>
    </div>
  );
}
export default Index;
