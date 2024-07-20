import React from "react";
import "./navbar.css";
import search from "../../svg/icons8-search-50.png";
import toggle from "../../svg/icons8-toggle-16.png";
import bell from "../../svg/icons8-bell-64.png";
import sms from "../../svg/icons8-sms-64.png";
import profile from "../../svg/icons8-male-user-50.png";
import down from "../../svg/icons8-down-arrow-50.png";

const Navbar = () => {
  return (
    <nav>
      <section>
        <div className="input-box">
          <img src={search} alt="" />
          <input
            type="text"
            className="input"
            placeholder="Type to search..."
          />
        </div>
        <div className="icons">
          <img src={toggle} alt="toggle" />
          <img src={bell} alt="bell" />
          <img src={sms} alt="sms" />
          <div className="text">
            <div className="main-text">Thomas Anree</div>
            <div className="sub-text">UX Designer</div>
          </div>
          <div className="profile">
            <img src={profile} alt="profile" />
            <img src={down} alt="down" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
