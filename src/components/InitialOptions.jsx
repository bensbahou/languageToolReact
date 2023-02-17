import React from "react";
import { Grid, Paper, Button } from "@mui/material";

function InitialOptions({
  setShowErrors,
  setValue,
  value,
  example_text,
  data,
  setData,
  add_errors,
}) {
  const fetchErrors = (text) => {
    // languagetool API
    const url = "https://api.languagetoolplus.com/v2/check";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `text=${text}&language=en-US&enabledOnly=false`,
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log("Data : ", _data);
        setData(add_errors(_data, text));
        setShowErrors(true);
      })
      .catch((err) => console.log("Error : ", err));
  };
  return (
    <Grid>
      <Paper elevation={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("Value : ", value);

            fetchErrors(value);
          }}
        >
          Correct Text
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("Value : ", value);

            setValue(example_text);
          }}
        >
          Example Text
        </Button>
      </Paper>
    </Grid>
  );
}

export default InitialOptions;
