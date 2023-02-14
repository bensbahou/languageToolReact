import React from "react";
import { Container, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Grid, Paper } from "@mui/material";
import BasicList from "./components/BasicList";
import LtTextArea from "./components/LtTextArea";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <Container>
      <ResponsiveAppBar />
      <Grid container spacing={2} paddingTop={4}>
        <Grid item lg={7} sm={12}>
          <LtTextArea />
        </Grid>
        <Grid item lg={5} sm={12}>
          <Paper elevation={3}>
            <BasicList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
