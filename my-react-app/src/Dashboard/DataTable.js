import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Popover,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ApplyFilterImg from "../assets/images/applyfilterimage.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DataTable() {
  function createData(
    order_no,
    date,
    patient_naem,
    hospital_id,
    test_name,
    doctor_name,
    Eta,
    status
  ) {
    return {
      order_no,
      date,
      patient_naem,
      hospital_id,
      test_name,
      doctor_name,
      Eta,
      status,
    };
  }

  const rows = [
    createData(
      "A19023",
      "01/05/2023",
      "Sankaranarayanan",
      "DH2023/0001245",
      "Anti Leukemia 1 Serum ",
      "Dr. Arun K Thambi",
      "03/05/2023",
      "Ready"
    ),
    createData(
      "A19024",
      "01/05/2023",
      "Baby. Alan",
      "DH2023/0001242",
      "Anti Leukemia 1 Serum ",
      "Dr. Abdul Siddique",
      "03/05/2023",
      "Partial Report"
    ),
    createData(
      "A19025",
      "01/05/2023",
      "Baby. Anirudh",
      "DH2023/0001212",
      "Anti Leukemia 1 Serum ",
      "Dr. Raveendran",
      "03/05/2023",
      "Lab Dropped"
    ),
    createData(
      "A19026",
      "01/05/2023",
      "Sankaranarayanan Warrier",
      "DH2023/0001247",
      "Comprehensive leukemia - Basic Lineage Panel ",
      "Dr. Vignesh Muraleedharan",
      "03/05/2023",
      "Ready"
    ),
  ];

  const [filterOptions, setFilterOptions] = useState({
    criteria: "",
    value: "",
  });

  const handleFilterChange = (event) => {
    setFilterOptions({
      ...filterOptions,
      [event.target.name]: event.target.value,
    });
  };

  const applyFilters = (rows) => {
    if (!filterOptions.criteria || !filterOptions.value) {
      return rows;
    }

    return rows.filter((row) =>
      row[filterOptions.criteria]
        .toLowerCase()
        .includes(filterOptions.value.toLowerCase())
    );
  };

  const filteredRows = applyFilters(rows);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: "#E4FBFB",
          marginTop: "68px",

          //   border: "0.3px dotted #1F6CAB",
        }}
      >
        <Grid item xs={6}>
          <Box style={{ padding: "15px" }}>
            <Typography
              style={{
                color: "#1F6CAB",
                fontSize: "22px",
                fontWeight: "600",
                marginTop: "-4px",
              }}
            >
              Patients Reports{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ display: "flex" }}>
            <Box>
              <img
                src={ApplyFilterImg}
                style={{
                  height: "34px",
                  width: "120px",
                  marginTop: "11px",
                  cursor: "pointer",
                }}
                onClick={handleFilterClick}
              />
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleFilterClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box style={{ padding: "15px" }}>
                <FormControl
                  variant="outlined"
                  style={{ minWidth: 200, marginBottom: "10px" }}
                >
                  <Select
                    value={filterOptions.criteria}
                    onChange={handleFilterChange}
                    name="criteria"
                    displayEmpty
                    inputProps={{ "aria-label": "Select Filter Criteria" }}
                  >
                    <MenuItem value="" disabled>
                      Select Filter Criteria
                    </MenuItem>
                    <MenuItem value="doctor_name">Doctor Name</MenuItem>
                    <MenuItem value="patient_naem">Patient Name</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="test_name">Test Name</MenuItem>
                    <MenuItem value="order_no">Order No</MenuItem>
                    <MenuItem value="hospital_id">Hospital ID</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFilterClose}
                >
                  Apply Filters
                </Button>
              </Box>
            </Popover>
            <Box>
              <Box style={{ display: "flex" }}>
               {filterOptions.criteria && (
                  <TextField
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      marginTop: "8px",
                      marginBottom: "2px",
                      marginRight: "-14px",
                      borderRadius: "30px",
                      marginLeft: "18px",
                      width: "100%",
                      // paddingLeft: '200px',
                      "& .MuiOutlinedInput-root": {
                        background: "#fff",
                        borderRadius: "25px",
                        width: "400px",
                        height: "42px",

                        textAlign: "center",
                        marginRight: "10px",
                        "&:hover fieldset": {
                          border: "1px solid #ADADAD",
                        },
                        "&.Mui-focused fieldset": {
                          border: "1px solid #ADADAD",
                        },
                      },
                      "& .MuiInputBase-input": {
                        background: "#fff",
                        borderRadius: "25px",
                        height: "6px",
                      },
                    }}
                    variant="outlined"
                    placeholder="Search..."
                    label={`Enter ${filterOptions.criteria.replace("_", " ")}`}
                    name="value"
                    value={filterOptions.value}
                    onChange={handleFilterChange}
                    style={{ marginBottom: "10px", width: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            type="button"
                            sx={{
                              "&.MuiButtonBase-root": {
                                p: "10px",
                                ml: 3,
                                width: "19px",
                                backgroundColor: "transparent",
                                height: "19px",
                                marginLeft: "0px",
                              },
                            }}
                            aria-label="search"
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontWeight: "800",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Order No{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Date{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Patient Name{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Hospital ID{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Test Name{" "}
                  </TableCell>{" "}
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Doctor Name{" "}
                  </TableCell>{" "}
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    ETA{" "}
                  </TableCell>{" "}
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Status{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "800", fontSize: "16px" }}>
                    Action{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "400", fontSize: "16px" }}
                    >
                      {row.order_no}
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.date}
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.patient_naem}
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.hospital_id}
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.test_name}
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.doctor_name}
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.Eta}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Box
                        style={{
                          backgroundColor:
                            row.status === "Ready"
                              ? "#89FFAA"
                              : row.status === "Partial Report"
                              ? "#E7F880"
                              : "#F2A38A",
                          padding: "5px 8px 5px 8px",
                          borderRadius: "20px",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontWeight: "400", fontSize: "16px" }}>
                      {row.protein}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default DataTable;
