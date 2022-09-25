import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper1 from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import More from "../Assets/Images/grey-more.png";
import "../components/Table.css";

export default function Variants() {
  return (
    <>
      <div className="main-dashboard" sx={{ minWidth: "950px" }}>
        <TableContainer component={Paper1} className="p-table-main">
          <Table className="p-table">
            <TableHead>
              <TableRow>
                <TableCell
                  className="p-r1"
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "500",
                    borderBottom: "none",
                  }}
                >
                  Order List
                </TableCell>
                <TableCell
                  className="p-r2"
                  sx={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "500",
                    borderBottom: "none",
                  }}
                >
                  <Typography className="monthly">Monthly</Typography>
                  <img src={More} alt="profile" className="more"></img>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography className="t-hname">No.</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="t-hname">Customer Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="t-hname">Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="t-hname">Action</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="t-hname"> </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">1</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head11">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">May 26, 2019</Typography>
                  <Typography className="List-head1">6:30 pm</Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">2</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">
                    Adding images to features post
                  </Typography>
                  <Typography className="List-head2">
                    Updated 1 day ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">3</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">
                    When will I be charge this month
                  </Typography>
                  <Typography className="List-head3">
                    Updated 1 day ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">4</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">
                    payment not going through
                  </Typography>
                  <Typography className="List-head4">
                    Updated 2 days ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">5</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">
                    Unable to add replies
                  </Typography>
                  <Typography className="List-head5">
                    Updated 1 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">6</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">REferal Bonus</Typography>
                  <Typography className="List-head6">
                    Updated 3 minutes ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography className="name-head11">7</Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">
                    How do i change my password
                  </Typography>
                  <Typography className="List-head7">
                    Updated 8 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="name-head1">John doe</Typography>
                  <Typography className="List-head1">
                    Updated 3 hours ago
                  </Typography>
                </TableCell>
                <TableCell>
                  <MoreVertIcon className="moreicon"></MoreVertIcon>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
