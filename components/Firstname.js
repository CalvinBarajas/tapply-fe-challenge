// material ui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// other libraries & misc
import styles from "../styles/Home.module.css";
import * as React from "react";
import { useForm } from "react-hook-form";

// components
import FilterSelection from "./FilterSelection";

/* This component is used to process and display the visitors first name */
const Firstname = () => {
  const { register, handleSubmit } = useForm();
  // process form
  const onSubmitForm = (values) => {
    // simple validation
    if (!values.firstName) {
      alert("Please Enter Your First Name...");
      return;
    }
    // write to local storage. This is a bit overkill, but a nice feature in every browser.
    sessionStorage.setItem("firstName", values.firstName);
    // manipulate component visibility
    document.getElementById("fname").style.display = "none";
    document.getElementById("first").style.display = "block";
    document.getElementById("outer").innerHTML =
      "<h3>Welcome " + sessionStorage.getItem("firstName") + "</h3>";
  };

  return (
    <div>
      <div id="outer" className={styles.visitorName}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xs">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className={styles.grid} id="fname">
                <TextField
                  className={styles.filterWhite}
                  // attribute for react-hook-form
                  {...register("firstName")}
                  required
                  id="outlined-required"
                  label="First Name"
                />
                <Button
                  size="large"
                  onClick={handleSubmit(onSubmitForm)}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Box>
          </Container>
        </React.Fragment>
      </div>
      {/* this is used for the radio button section */}
      <div id="first" className={styles.firstClass}>
        <FilterSelection />
      </div>
    </div>
  );
};

export default Firstname;
