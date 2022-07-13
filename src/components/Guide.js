import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "../assets/CRYPTOxDC.png";


const Guide = () => {
  
  return (
    <div className="flex justify-center rounded-div  py-8 text-primary m-auto">
      <img  className=" w-[70%]" src={Image} alt=""/>
    </div>
  );
};

export default Guide;
