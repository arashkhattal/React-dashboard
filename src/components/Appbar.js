import React from "react";
import "../components/Appbar.css";
import { Divider, Typography } from "@mui/material/";
import Shape from "../Assets/Images/shape.png";
import Bell from "../Assets/Images/bell.png";
import More from "../Assets/Images/grey-more.png";
import avatar from "../Assets/Images/avatar.png";

function Appbar() {
  return (
    <div className="appbar">
      <Typography className="O1">Welcome Back, Marci</Typography>
      <Typography className="O2">
        Here is the information about all yours orders
      </Typography>
      <img src={Shape} alt="profile" className="Search"></img>
      <img src={Bell} alt="profile" className="Notify"></img>
      <div className="NewNotify"></div>
      <Divider
        style={{
          position: "absolute",
          width: "0px",
          left: "1484px",
          top: "41px",
          bottom: "0px",
          height: "32px",
          /* grayscale / divider */
          border: "1px solid #DFE0EB",
        }}
      />
      <div className="Profile">
        <img src={avatar} alt="profile" className="John"></img>
      </div>
      <Typography className="About">Marci Fumons</Typography>
      <img src={More} alt="profile" className="more"></img>
    </div>
  );
}

export default Appbar;
