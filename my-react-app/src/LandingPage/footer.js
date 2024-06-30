import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import LandingPageLogo from "../assets/images/LandingPageLogo.png";

import { Facebook, Pinterest, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <Box mb={3}>
              <img
                src={LandingPageLogo}
                style={{ height: "50px", width: "150px" }}
              />

              <Typography style={{ fontWeight: "400", fontSize: "18px" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              </Typography>

              <Box>
                <IconButton href="#" title="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton href="#" title="Pinterest">
                  <Pinterest />
                </IconButton>

                <IconButton href="#" title="Twitter">
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} lg>
            <Typography
              style={{ color: "#1F6CAB", fontSize: "20px", fontWeight: "500" }}
            >
              Cities{" "}
            </Typography>
            <Box style={{ marginTop: "12PX" }}>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "22px",
                }}
              >
                Bangalure{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Delhi{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Noida{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Hyderabad{" "}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} lg>
            <Typography
              style={{ color: "#1F6CAB", fontSize: "20px", fontWeight: "500" }}
            >
              Support
            </Typography>
            <Box style={{ marginTop: "12PX" }}>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "22px",
                }}
              >
                Getting started{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Help center{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Report a bug{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Refund policy{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Call support{" "}
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} lg>
            <Typography
              style={{ color: "#1F6CAB", fontSize: "20px", fontWeight: "500" }}
            >
              Contact Us
            </Typography>
            <Box style={{ marginTop: "12PX" }}>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "22px",
                }}
              >
                info@accesslabz.com{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                (+91) 9288008801{" "}
              </Link>
              <Link
                style={{
                  color: "#505050",
                  fontWeight: "400",
                  fontSize: "16px",
                  marginTop: "14px",
                }}
                display="block"
              >
                Door No. 28/69/1, Patturaikkal, Thrissur, Kerala 680008, India{" "}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
