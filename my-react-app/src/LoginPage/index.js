import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  // Checkbox,
  // Divider,
  FormControl,
  // FormControlLabel,
  FormHelperText,
  Grid,
  // IconButton,
  // InputAdornment,
  InputLabel,
  OutlinedInput,
  // Stack,
  Typography,

  // useMediaQuery
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
// import useScriptRef from "hooks/useScriptRef";

import LoginImage1 from "../assets/images/loginImage1.png";
import LoginLogo from "../assets/images/loginLogo.png";
import PhoneImage from "../assets/images/Phone.png";

function LoginPage() {
  // const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  return (
    <div className="App">
      <Box
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          padding: "140px 0px 140px 0px",
          alignItems: "center",
          backgroundColor: "grey",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "45px",
            padding: "35px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {" "}
              <Box style={{ display: "flex" }}>
                <img
                  src={LoginImage1}
                  style={{ height: "30px", width: "30px" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <img src={LoginLogo} style={{ width: "195px", height: " 50px" }} />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-3px",
            }}
          >
            <img src={LoginImage1} style={{ height: "60px", width: "60px" }} />
          </Box>
          <Typography
            style={{ color: "#1F6CAB", fontWeight: "900", fontSize: "24px" }}
          >
            {" "}
            Report Downlad portal{" "}
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box style={{ padding: "25px" }}>
                <Box
                  style={{
                    backgroundColor: "#00D3EB",
                    width: "456px",
                    borderRadius: "20px",
                    padding: "25px 60px 25px 60px",
                    marginTop: "-5px",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1F6CAB",
                        fontWeight: "400",
                        fontSize: "24px",
                      }}
                    >
                      Login
                    </Typography>
                  </Box>
                  <Box>
                    <Formik
                      initialValues={{
                        fullname: "zinfog@gmail.com",
                        password: "12345678",
                        submit: null,
                      }}
                      validationSchema={Yup.object().shape({
                        fullname: Yup.string()
                          .max(255)
                          .required("Username is required"),
                        password: Yup.string()
                          .max(255)
                          .required("Password is required"),
                      })}
                      onSubmit={(values, { setSubmitting }) => {
                        const { fullname, password } = values;
                        // Check credentials
                        if (
                          fullname === "zinfog@gmail.com" &&
                          password === "12345678"
                        ) {
                          navigate("/dashboard");
                        } else {
                          alert("Invalid credentials");
                        }
                        setSubmitting(false);
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        touched,
                        values,
                      }) => (
                        <form noValidate onSubmit={handleSubmit}>
                          <Box style={{ display: "flex" }}>
                            <InputLabel htmlFor="outlined-adornment-username-login">
                              User Name
                            </InputLabel>
                          </Box>

                          <FormControl
                            fullWidth
                            error={Boolean(touched.fullname && errors.fullname)}
                            sx={{ marginBottom: 1, marginTop: 1 }}
                          >
                            <OutlinedInput
                              sx={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                              }}
                              id="outlined-adornment-username-login"
                              type="text"
                              placeholder="Enter email id"
                              value={values.fullname}
                              size="small"
                              name="fullname"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              inputProps={{}}
                            />
                            {touched.fullname && errors.fullname && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-username-login"
                              >
                                {errors.fullname}
                              </FormHelperText>
                            )}
                          </FormControl>
                          <Box style={{ display: "flex" }}>
                            <InputLabel htmlFor="outlined-adornment-password-login">
                              Password
                            </InputLabel>
                          </Box>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ marginBottom: 1, marginTop: 1 }}
                          >
                            <OutlinedInput
                              sx={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                              }}
                              placeholder="Enter password"
                              id="outlined-adornment-password-login"
                              type="password"
                              size="small"
                              value={values.password}
                              name="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              inputProps={{}}
                            />
                            {touched.password && errors.password && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-password-login"
                              >
                                {errors.password}
                              </FormHelperText>
                            )}
                          </FormControl>

                          <Box
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              style={{
                                backgroundColor: "#1F6CAB",
                                padding: "22px 32px 18px 32px",
                                color: "#fff",
                                fontSize: "18px",
                                fontWeight: "500",
                                marginTop: "13px",
                                height: "36px",
                                borderRadius: "5px",
                              }}
                            >
                              SUBMIT
                            </Button>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "10px",
                            }}
                          >
                            <Typography
                              style={{
                                color: "#505050",
                                fontWeight: "600",
                                textDecoration: "underline",
                                fontSize: "16px",
                              }}
                            >
                              Reset Password
                            </Typography>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "14px",
                }}
              >
                <Box>
                  <img
                    src={LoginImage1}
                    style={{ height: "100px", width: "100px" }}
                  />
                </Box>
                <Box>
                  <img
                    src={PhoneImage}
                    style={{
                      height: "30px",
                      width: "30px",
                      marginTop: "32px",
                      marginLeft: "70px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    style={{
                      marginTop: "30px",
                      marginLeft: "20px",
                      color: "#1F6CAB",
                      fontWeight: "700",
                      fontSize: "24px",
                    }}
                  >
                    (+91) 9288008801
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {" "}
              <Box>
                <Typography
                  style={{
                    marginTop: "30px",
                    marginLeft: "20px",
                    color: "#505050",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  I hereby agree and accept the Terms of service and Privacy
                  policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default LoginPage;
