import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Divider,

  // useMediaQuery
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginImage1 from "../assets/images/loginImage1.png";

import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import landingImg from "../assets/images/landingimg.jpg";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo15.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.png";
import logo10 from "../assets/images/logo10.png";
import logo11 from "../assets/images/logo11.png";
import logo12 from "../assets/images/logo12.png";
import logo13 from "../assets/images/logo13.png";
import logo14 from "../assets/images/logo14.png";
import logo15 from "../assets/images/logo15.png";
import logo16 from "../assets/images/logo16.png";
import logo17 from "../assets/images/logo17.png";
import logo18 from "../assets/images/logo18.png";
import logo19 from "../assets/images/logo19.png";
import TestTube from "../assets/images/TESTtubeimg1.png";

import rectangularimg from "../assets/images/rectangle.png";

function Home() {
  const images = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
  ];
  const testubetext = [
    " Liver Function Test",
    " Vitamin D (25-OH)",
    " CBC",
    " Diabetes Screening",
    " COVID-RTPCR",
    " Thyroid profile Total",
    " Thyroid profile Total",
    " CBC",
    " Vitamin D (25-OH)",
    " Diabetes Screening",
    " Thyroid profile Total",
    " Vitamin D (25-OH)",
    " CBC",
    " Liver Function Test",
    " Diabetes Screening",
  ];

  const boxStyle = {
    flexBasis: "100%",
    padding: 24,
    paddingBottom: 0,
    marginBottom: 0,
  };

  const boxImageStyle = {
    height: 220,
    width: "100%",
    objectFit: "cover",
  };

  const boxTitleStyle = {
    borderLeft: "3px solid var(--purple)", // You can define --purple in your theme or use a hex value directly
    paddingLeft: 0,
    fontSize: "24px",
    fontWeight: 600,
  };

  const userFollowInfoStyle = {
    color: "#808080",
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "-12px",
  };

  const wrapStyle = {
    display: "flex",
    marginTop: "-30px",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: 5,
    padding: 24,
    flexWrap: "wrap",
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <img src={landingImg} style={{ width: "100%", height: "520px" }} />
        </Grid>
      </Grid>{" "}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {" "}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Typography
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                color: "#505050",
                fontWeight: "700",
                fontSize: "32px",
              }}
            >
              Popular Lab in your city
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              padding: 2,
            }}
          >
            {images.map((image, index) => (
              <Box key={index} sx={{ margin: 1 }}>
                <img
                  src={image}
                  alt={`logo${index + 1}`}
                  style={{
                    width: "90px", // Set a fixed width for images
                    height: "auto",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box style={{ padding: "40px 40px 0px 40px" }}>
        <Divider sx={{ border: "1px solid #f1eded" }} />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {" "}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Typography
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                color: "#505050",
                fontWeight: "700",
                fontSize: "32px",
              }}
            >
              Popular test in your city
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              padding: 2,
            }}
          >
            {testubetext.map((text, index) => (
              <Box
                style={{
                  backgroundColor: "#F5F7F8",
                  borderRadius: "50px",
                  padding: "5px 7px 5px 5px",
                  color: "#505050",
                  marginTop: "4px",
                  fontWeight: "400",
                  fontSize: "18px",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={TestTube}
                  alt="Test Tube"
                  style={{
                    height: "30px",
                    width: "30px",
                    marginRight: "5px",
                    marginLeft: "-4PX",
                  }}
                />
                {text}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: "#EFF8FF",
          marginTop: "62px",
          //   border: "0.3px dotted #1F6CAB",
        }}
      >
        <Grid item xs={12}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                color: "#1F6CAB",
                fontWeight: "700",
                fontSize: "32px",
              }}
            >
              How we work
            </Typography>
          </Box>
          <Grid item xs={12}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "20PX",
                marginBottom: "40px",
              }}
            >
              <img
                src={work1}
                alt="Work 1"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
              <img
                src={work2}
                alt="Work 2"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
              <img
                src={work3}
                alt="Work 3"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: "#F5F7F8",
          marginTop: "1px",
        }}
      >
        <Grid item xs={12}>
          <Box
            style={{
              display: "flex",
              justifyContent: "start",
              padding: "25px",
            }}
          >
            <Typography
              style={{
                marginTop: "10px",
                marginLeft: "20px",
                color: "#000000",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Pick where you left off{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4} xl={4} sm={12} md={6}>
          <div style={wrapStyle}>
            <Paper style={boxStyle}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                <img
                  style={boxImageStyle}
                  src={rectangularimg}
                  title="Girl Eating Pizza"
                />
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography style={boxTitleStyle}>
                    what can we learn today?
                  </Typography>{" "}
                </div>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    color: "#505050",
                  }}
                >
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </Typography>
                <Typography style={userFollowInfoStyle}>
                  30 minutes ago
                </Typography>
              </div>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} xl={4} sm={12} md={6}>
          <div style={wrapStyle}>
            <Paper style={boxStyle}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                <img
                  style={boxImageStyle}
                  src={rectangularimg}
                  title="Girl Eating Pizza"
                />
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography style={boxTitleStyle}>
                    what can we learn today?
                  </Typography>{" "}
                </div>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    color: "#505050",
                  }}
                >
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </Typography>
                <Typography style={userFollowInfoStyle}>
                  30 minutes ago
                </Typography>
              </div>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} xl={4} sm={12} md={6}>
          <div style={wrapStyle}>
            <Paper style={boxStyle}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                <img
                  style={boxImageStyle}
                  src={rectangularimg}
                  title="Girl Eating Pizza"
                />
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography style={boxTitleStyle}>
                    what can we learn today?
                  </Typography>{" "}
                </div>
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    fontWeight: 400,
                    color: "#505050",
                  }}
                >
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </Typography>
                <Typography style={userFollowInfoStyle}>
                  30 minutes ago
                </Typography>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
      {/* Feel Free to Contact Us */}
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: "#EFF8FF",
          marginTop: "1px",

          //   border: "0.3px dotted #1F6CAB",
        }}
      >
        <Grid item xs={12}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px 60px 80px 100px",
              alignItems: "center",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box style={{ display: "flex" }}>
                  <img
                    src={LoginImage1}
                    style={{ height: "50px", width: "50px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                {" "}
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    style={{
                      color: "#1F6CAB",
                      fontWeight: "700",
                      fontSize: "48px",
                      marginTop: "-40px",
                    }}
                  >
                    Feel free to contact us
                  </Typography>
                </Box>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      textAlign: "center",
                      padding: "0 70px 0px 70px",
                      fontSize: "18px",
                      marginTop: "-6px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    mollis quisque senectus massa lobortis, scelerisque maecenas
                    sagittis faucibus integer{" "}
                  </Typography>
                </Box>
                <img
                  src={LoginImage1}
                  style={{
                    height: "70px",
                    width: "70px",
                    position: "absolute",
                    marginLeft: "10px",
                  }}
                />
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    // disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    style={{
                      backgroundColor: "#1F6CAB",
                      padding: "22px 32px 18px 32px",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginTop: "13px",
                      height: "36px",
                      borderRadius: "5px",
                    }}
                  >
                    Contact Us
                  </Button>

                  <Box style={{ display: "flex" }}>
                    <img
                      src={LoginImage1}
                      style={{
                        height: "120px",
                        width: "120px",
                        position: "absolute",
                        marginLeft: "30px",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {" "}
          <Box
            style={{
              padding: "0 30px 0 30px",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "start" }}>
              <Typography
                style={{
                  marginTop: "30px",
                  marginLeft: "20px",
                  color: "#1F6CAB",
                  fontWeight: "700",
                  fontSize: "32px",
                }}
              >
                Frequently Asked Questions{" "}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={12} sm={12} xs={12}></Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Box
            style={{
              padding: "0 30px 0 30px",

              marginBottom: "20px",
            }}
          >
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                sx={{ fontSize: "18px", fontWeight: "600", color: "#505050" }}
              >
                Q1. What is ACCESS home lab collection service?{" "}
              </AccordionSummary>
              <AccordionDetails>
                We are the home collection service provider across different
                cities in Kerala. We simplify lab testing for customers by
                collecting the test samples from their home or office & getting
                those tested at any lab of customer's choice.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: "14px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontSize: "18px", fontWeight: "600", color: "#505050" }}
              >
                Q2. How can I book a home collection?{" "}
              </AccordionSummary>
              <AccordionDetails>
                We are the home collection service provider across different
                cities in Kerala. We simplify lab testing for customers by
                collecting the test samples from their home or office & getting
                those tested at any lab of customer's choice.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: "14px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ fontSize: "18px", fontWeight: "600", color: "#505050" }}
              >
                Q3. Is there any collection charge?{" "}
              </AccordionSummary>
              <AccordionDetails>
                We are the home collection service provider across different
                cities in Kerala. We simplify lab testing for customers by
                collecting the test samples from their home or office & getting
                those tested at any lab of customer's choice.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ fontSize: "18px", fontWeight: "600", color: "#505050" }}
              >
                Q4. Can I get covid tests at home?
              </AccordionSummary>
              <AccordionDetails>
                We are the home collection service provider across different
                cities in Kerala. We simplify lab testing for customers by
                collecting the test samples from their home or office & getting
                those tested at any lab of customer's choice.
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ marginTop: "14px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ fontSize: "18px", fontWeight: "600", color: "#505050" }}
              >
                Q5. How long does it take to get the test reports?
              </AccordionSummary>
              <AccordionDetails>
                We are the home collection service provider across different
                cities in Kerala. We simplify lab testing for customers by
                collecting the test samples from their home or office & getting
                those tested at any lab of customer's choice.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={12} sm={12} xs={12}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
