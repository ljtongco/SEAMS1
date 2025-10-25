import React from "react";
import "./SeamsHeader.css";
import uccbg from './assets/uccbg.png';
import ucclogo from './assets/ucclogo.png'

function SeamsHeader() {
  return (
    <header className="seams-header">
      <div className="seams-top">
        <img src={ucclogo} alt="UCC Logo" className="seams-logo" />
        <h1 className="seams-title">S.E.A.M.S</h1>
      </div>
      <p className="seams-subtitle">
        <span className="orange">S</span>chool{" "}
        <span className="orange">E</span>vent{" "}
         <span className="">and</span> {" "}
        <span className="orange">A</span>ctivity{" "}
        <span className="orange">M</span>anagement{" "}
        <span className="orange">S</span>ystem
      </p>
    </header>
  );
}

export default SeamsHeader;
