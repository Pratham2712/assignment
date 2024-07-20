import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../svg/reshot-icon-graph-4F9AP625MV.svg";
// import Form from "../../svg/reshot-icon-general-form-container-ZMHS52F8XT.svg";
import Form from "../../svg/icons8-form-80.png";
import down from "../../svg/icons8-down-arrow-50.png";
import up from "../../svg/icons8-up-arrow-32.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [form, setForm] = useState(false);
  const [dash, setDash] = useState(false);
  const navigate = useNavigate();
  const data = {
    Forms: [
      "Form Elements",
      "Pro Form Elements",
      "Form layout",
      "Pro From Layout",
    ],
    Dashboard: ["eCommerce", "Analytics", "Marketing", "CRM", "Stocks"],
  };
  const handleRoute = (ele) => {
    console.log(ele);
    if (ele === "Pro From Layout") {
      navigate("/form/proFormLayout");
    }
  };
  return (
    <main className="sidebar">
      <div className="heading">
        <span className="logo">
          <img src={logo} alt="" />
        </span>
        <span className="com-name">TailAdmin</span>
      </div>
      <div className="content">
        <section
          className="forms"
          style={{ background: form ? "#333A48" : "" }}
          onClick={() => setForm(!form)}
        >
          <div className="forms-content">
            <img src={Form} alt="form" />
            <div className="form-name">Forms</div>
          </div>
          <img src={form ? up : down} alt="down" />
        </section>
        {form ? (
          <div className="form-con">
            {data.Forms.map((ele, index) => {
              return (
                <div
                  className="form-ele"
                  key={index}
                  onClick={() => handleRoute(ele)}
                >
                  {ele}
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <section
        className="forms"
        style={{ background: dash ? "#333A48" : "" }}
        onClick={() => setDash(!dash)}
      >
        <div className="forms-content">
          <img src={Form} alt="form" />
          <div className="form-name">Dashboard</div>
        </div>
        <img src={dash ? up : down} alt="down" />
      </section>
      {dash ? (
        <div className="form-con">
          {data.Dashboard.map((ele) => {
            return <div className="form-ele">{ele}</div>;
          })}
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default SideBar;
