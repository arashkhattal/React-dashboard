import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "../components/Cards.css";
import Mu from "../Assets/Images/blue-morecontact.png";
import Case from "../Assets/Images/blue-case.png";
import Check from "../Assets/Images/blue-check.png";
import Ar from "../Assets/Images/blue-arrowright.png";
import Ua from "../Assets/Images/green-uparrow.png";
import Da from "../Assets/Images/red-downarrow.png";

// const Item = styled(Paper)(({ theme }) => ({
//   //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function DividerStack() {
  return (
    <div className="cards">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <p className="item">
          <Typography className="cardhead1">99,995</Typography>
          <img src={Mu} alt="profile" className="cardicon1"></img>
          <Typography className="sub-cardhead">Total users</Typography>
          <img src={Ua} alt="profile" className="icon-card"></img>
          <Typography className="cardtittle">10.2 +10% this week</Typography>
        </p>
        <p className="item">
          <Typography className="cardhead">23,283.5</Typography>
          <img src={Case} alt="profile" className="cardicon2"></img>
          <Typography className="sub-cardhead">Total Products</Typography>
          <img src={Ua} alt="profile" className="icon-card"></img>
          <Typography className="cardtittle">3.1 +0.49% this week</Typography>
        </p>
        <p className="item">
          <Typography className="cardhead">46,827</Typography>
          <img src={Check} alt="profile" className="cardicon3"></img>
          <Typography className="sub-cardhead">Total users</Typography>
          <img src={Da} alt="profile" className="icon-card"></img>
          <Typography className="cardtittle">2.56 -0.91% this week</Typography>
        </p>
        <p className="item">
          <Typography className="cardhead">124,854</Typography>
          <img src={Ar} alt="profile" className="cardicon4"></img>
          <Typography className="sub-cardhead">Refunded</Typography>
          <img src={Ua} alt="profile" className="icon-card"></img>
          <Typography className="cardtittle">7.2 +1.51% this week</Typography>
        </p>
      </Stack>
    </div>
  );
}
