import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    // <div className="subscribe">
    //   <div className="content">
    //     <h2>Join Our DeFi Community</h2>
    //     <form
    //       action="https://getform.io/f/fd9942be-e037-443e-bb46-023d1afc80b6"
    //       method="POST"
    //     >
    //       <div className="form-container display-col">
    //         <input type="email" name="email" placeholder="Enter your email" />
    //         <button className="btn">Sign Up</button>
    //       </div>
    //       <div className="form-container">
    //         <input type="checkbox" />{" "}
    //         <p>Yes, I agree to receive email communications from DeFi.</p>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="subscribe">
      <div className="content">
        <h3> join World Record book in Blockchain Comunity</h3>
        <form
          action="https://getform.io/f/11cb99cc-5eaa-4729-ae39-0ac7dc99eb77"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="awesome@gmail.com" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Yes, I agree to receive email comunication</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Subscribe;
