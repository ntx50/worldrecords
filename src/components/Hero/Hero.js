import { useEffect } from "react";
import React from "react";
import MainVideo from "../../assets/web3.mp4";
import "./Hero.css";

const Hero = () => {
  let numberRecord=0;

  useEffect(() => {
    const getPrompts = async () => {
        numberRecord = (await window.contract.getAllPrompt()).length ;
        console.log(numberRecord);
    };
    getPrompts();

    // const getCompanys = async () => {
    //     changeCompanyList(await window.contract.getAllCompany());
    //     console.log(await window.contract.getAllCompany());
    // };
    // getCompanys();
}, [])
  return (
    <div className="hero">
      <video autoPlay muted loop id="video1">
        <source src={MainVideo} />
      </video>
      <div className="hero-text">
        <h1>The First</h1>
        <h2>Guinness World Records Book</h2>
        <h1>
          in <span className="blue"> Blockchain </span> 
        </h1>
        {/* <div className="btn-group">
          <button className="btn">Discovery</button>
          <button className="btn">FAQ</button>
        </div> */}
      </div>
      <div className="bottom-text">
        <h2>
        Total World Records: <span className="blue"> 76.098</span>  Records
         </h2>
      </div>
    </div>
  );
};

export default Hero;
