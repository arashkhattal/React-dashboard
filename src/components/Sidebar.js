import React from "react";
import "../components/Sidebar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import overview from "../Assets/Images/blue-network.png";
import product from "../Assets/Images/grey-case.png";
import contact from "../Assets/Images/grey-contact.png";
import checkout from "../Assets/Images/grey-checkout.png";
import setting from "../Assets/Images/grey-setting.png";
import help from "../Assets/Images/grey-help.png";
import msg from "../Assets/Images/grey-msg.png";
import logout from "../Assets/Images/red-logout.png";
import More from "../Assets/Images/grey-more.png";
import Logo from "../Assets/Images/Logo.png";

function Sidebar() {
  return (
    <div className="">
      <AppBar
        style={{
          background: "#fff",
          width: "259px",
          height: "100vh",
          left: "0px",
          top: "0px",
          borderRight: "1px solid #DFE0EB",
        }}
      >
        <Toolbar>
          <div className="Image1">
            <img src={Logo} alt="" />
          </div>

          <div className="Select"></div>

          {/* <div
            className="Selected"
            style={{
              position: "absolute",
              top: "128px",
              left: "0px",
              width: "3px",
              height: "56px",
              background: "#DDE2FF",
            }}
          ></div> */}

          <div className="Category">
            <Typography className="" style={{ color: "#347AE2" }}>
              <img src={overview} alt=" " className="Image2" />
              Overview
            </Typography>
            <Typography
              className="Patient"
              style={{
                fontFamily: "Mulish",
                fontWeight: "400",
                color: "#7C8DB5",
              }}
            >
              <img src={product} alt=" " className="Image4" />
              Product
              <img src={More} alt="profile" className="morearr"></img>
            </Typography>
            <Typography
              className="Recom"
              style={{
                fontFamily: "Mulish",
                fontWeight: "400",
                color: "#7C8DB5",
              }}
            >
              <img src={contact} alt=" " className="Image5" />
              Orders
              <img src={More} alt="profile" className="morearr2"></img>
            </Typography>
            <Typography
              className="Algo "
              style={{
                fontFamily: "Mulish",
                fontWeight: "400",
                color: "#7C8DB5",
              }}
            >
              <img src={checkout} alt=" " className="Image6" />
              Checkout
              <div className="Notifycount">2</div>
            </Typography>
            <Typography
              className="Declerations"
              style={{
                fontWeight: "500",
                color: "#7C8DB5",
              }}
            >
              <img src={setting} alt=" " className="Image7" />
              Setting
            </Typography>

            {/* <Divider
              style={{
                border: "1px solid #DFE0EB",
                width: "255px",
                position: "absolute",
                left: "0px",
                top: "482px",
                background: "#DFE0EB",
                opacity: ".05",
              }}
            /> */}
            <Typography
              className="Settings"
              style={{
                marginTop: "168px",
                fontWeight: "500",
                color: "#7C8DB5",
              }}
            >
              <img src={help} alt=" " className="Image9" />
              Help Center
            </Typography>
            <Typography
              className="Logout"
              style={{
                fontWeight: "500",
                color: "#7C8DB5",
              }}
            >
              <img src={msg} alt=" " className="Image10" />
              Contact US
            </Typography>
            <Typography
              className="Logout"
              style={{ fontFamily: "Mulish", fontWeight: "400", color: "red" }}
            >
              <img src={logout} alt=" " className="Image11" />
              Log out
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Sidebar;
