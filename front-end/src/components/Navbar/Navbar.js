import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [searchVal, setSearchVal] = useState("");

  function handleSearchBtnClick() {
    if (searchVal.trim()) {
      props.onSearch(searchVal);
    }
  }

  function handleEnterPressed(e) {
    if (e.key.toLowerCase() === "enter" && searchVal.trim()) {
      props.onSearch(searchVal);
    }
  }

  function handleSearchValChange(e) {
    setSearchVal(e.target.value);
  }

  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="search-bar">
        <input
          type="text"
          id="search-in"
          className="s-i"
          placeholder="Dime, ¿Qué estás buscando?..."
          value={searchVal}
          onKeyPress={handleEnterPressed}
          onChange={handleSearchValChange}
        />
        <div className="search-btn" onClick={handleSearchBtnClick}></div>
      </div>
      <div className="sections">
        <div className="sec">
          <div className="sec-name">Ropa</div>
        </div>
        <div className="sec">
          <div className="sec-name">Zapatos</div>
        </div>
        <div className="sec">
          <div className="sec-name">Joyería</div>
        </div>
        <div className="sec">
          <div className="sec-name">Juguetes</div>
        </div>
        <div className="sec">
          <div className="sec-name">Otros</div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
