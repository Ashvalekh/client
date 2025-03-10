import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">Parvati Hills, Pune</span>
          <div className="flexCenter f-menu">
            {
               <span>All rights are reserved@Castlewall.in</span>
            }
            {/* <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
