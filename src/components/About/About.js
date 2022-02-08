import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

export default function About() {
  return (
      <>
    <div className="about">
        <h2>A Growing Protocol Ecosystem</h2>
        <p>
          Securely and easily buy, sell and trade skins/items for games like
          CS:GO, DOTA2, RUST, TF2 and more.
        </p>
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<SiHiveBlockchain className="icon" />}
              heading="Lorem ipsum dolor sit amet"
              text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="Lorem ipsum dolor sit amet"
              text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiFsecure className="icon" />}
              heading="Lorem ipsum dolor sit amet"
              text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<VscServerProcess className="icon" />}
              heading="Lorem ipsum dolor sit amet"
              text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
      </div>
      <a href="/" className="btn">
        Swap
      </a>
    </div>
    </>

  );
};
// export default About;
