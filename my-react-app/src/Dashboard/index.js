import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import LoginLogo from "../assets/images/loginLogo.png";
import SignOutPng from "../assets/images/sign-out.png";
import loginsignupimg from "../assets/images/dashboardusername.png";
import DataTable from "./DataTable";

function ResponsiveAppBar() {
  return (
    <>
      <AppBar
        style={{ backgroundColor: "#F5F7F8", width: "100%", height: "auto" }}
      >
        <Container>
          <Toolbar disableGutters>
            <img src={LoginLogo} style={{ width: "115px", height: " 30px" }} />

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }} component={Link} to={`/login`}>
              <Tooltip title="Open settings">
                <img src={loginsignupimg} style={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }} component={Link} to={`/login`}>
              <Tooltip title="Open settings">
                <img
                  src={SignOutPng}
                  style={{ cursor: "pointer", marginLeft: "14PX" }}
                />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <DataTable />
    </>
  );
}
export default ResponsiveAppBar;
