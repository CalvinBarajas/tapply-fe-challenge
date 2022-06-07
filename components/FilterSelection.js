// material ui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// other libraries & misc
import styles from "../styles/Home.module.css";
import axios from "axios"; // to query chuck norris API
import { useForm } from "react-hook-form";
import * as React from "react";

// components
import Replay from "./Replay";

/* this component is used for the site visitor to chose a trivia category */
const FilterSelection = () => {
  let category;
  let triviaAnswer;
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (values) => {
    /* this for loop is a workaround to a bug in the form. Was unable to capture
       selected radio button alone. radio button selections were being
       appended to object.
    */
    for (let each in values) {
      if (values[each]) {
        category = values[each];
      }
    }
    // using axios, call API to obtain random trivia
    const getData = async (category) => {
      await axios
        .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((res) => {
          triviaAnswer = res.data.value;
          // replace content with found trivia text
          document.getElementById(
            "radioOuter"
          ).innerHTML = `<h6>${triviaAnswer}</h6>`;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData(category); // call axios function
    document.getElementById("replay").style.display = "block"; // show replay button
  };

  return (
    <div>
      <div id="radioOuter" className={styles.visitorName}>
        <h6 className={styles.radioHead}>
          Please Select Trivia Category Below
        </h6>
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
              {/* I had a really hard time getting MUI, Next.js, and react-hook-form working together */}
              <div className={styles.grid} id="rgroup">
                <RadioGroup className={styles.radioGroup}>
                  <FormControlLabel
                    value="fashion"
                    control={<Radio />}
                    {...register("radioFashion")}
                    label="Fashion"
                  />
                  <FormControlLabel
                    value="food"
                    control={<Radio />}
                    {...register("radioFood")}
                    label="Food"
                  />
                  <FormControlLabel
                    value="music"
                    control={<Radio />}
                    {...register("radioMusic")}
                    label="Music"
                  />
                </RadioGroup>
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
      {/* game replay button at the bottom of the page */}
      <div id="replay" style={{ display: "none" }}>
        <Replay />
      </div>
    </div>
  );
};

export default FilterSelection;
