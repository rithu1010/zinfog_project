import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import LandingPageLogo from "../assets/images/LandingPageLogo.png";
import Footer from "./footer";
// import AdbIcon from "@mui/icons-material/Adb";
import loginsignupimg from "../assets/images/loginsignup.png";
import Home from "./Home";
import { Divider, Grid } from "@mui/material";

const pages = ["Home", "About", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  return (
    <>
      <AppBar
        style={{ backgroundColor: "#F5F7F8", width: "100%", height: "auto" }}
      >
        <Container>
          <Toolbar disableGutters>
            <img
              src={LandingPageLogo}
              style={{ height: "40px", width: "70px" }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  key={page}
                  sx={{
                    my: 2,
                    color: "#808080 ",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "block",
                    "&:hover": {
                      color: "#1F6CAB",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} component={Link} to={`/login`}>
              <Tooltip title="Open settings">
                <img src={loginsignupimg} style={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Home />
      <Box style={{ padding: "40px 40px 10px 40px" }}>
        <Divider sx={{ border: "1px solid #f1eded" }} />
      </Box>
      <Footer />
      <Box style={{ padding: "0px 40px 50px 40px" }}>
        <Divider sx={{ border: "1px solid #c4c4c4" }} />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 40px 0 40px",
              marginBottom: "50px",
              marginTop: "-20px",
            }}
          >
            <Box>Copyright © 2022 Access labz</Box>
            <Box>
              All Rights Reserved | Terms and Conditions | Privacy Policy
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default ResponsiveAppBar;
