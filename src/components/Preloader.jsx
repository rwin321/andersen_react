import preloader from "../assets/imgs/preloader.svg";
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
