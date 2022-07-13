import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import HeroImage from '../assets/DCxCRYPTO.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1 className="h1">CryptoDC is a free and powerful notification alert bot.</h1>
          <p className="p">Create an account and save your favorite cryptocurrencies,and you will recive notification on Discord! </p>
          <div className="input-container">
            <Link to="/signup">
              <button className="btn">Create Account</button>
            </Link>
          </div>
        </div>

        <div className="right">
          <div className='img-container'>
                        <img src={HeroImage} alt=''/>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
