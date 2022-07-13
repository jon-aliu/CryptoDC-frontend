import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Featured.css";
import FeaturedImage from "../assets/image2.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <div className="img-container">
            <img src={FeaturedImage} alt="" />
          </div>
        </div>

        <div className="right">
          <p className="p">
          You can now see the instant price and 24-hour volume of cryptocurrencies on discord!

          </p>
          <h1 className="h1"></h1>
          <p className="p">Crypto at any time with real-world prices. Get information about any crypto that you desire, along with getting professional ratings of them, graph command, news. There is endless possibilities with CryptoDC Bot!</p>
          <div className="input-container">
            <Link to="/coins">
              <button className="btn">See More Coins</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
