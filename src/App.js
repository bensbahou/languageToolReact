import React from "react";
import { Container, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Grid, Paper } from "@mui/material";
import BasicList from "./components/BasicList";
import LtTextArea from "./components/LtTextArea";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const example_text = `LanguageTool is your intelligent writing assistant for all common browsers and word processors. 

Write or paste your text here too have it checked continuously. Errors will be underlined in different colours: we will mark seplling errors with red underilnes. Furthermore grammar error's are highlighted in yellow. LanguageTool also marks style issues in a reliable manner by underlining them in blue. did you know that you can sea synonyms by double clicking a word? Its a impressively versatile tool especially if youd like to tell a colleague from over sea's about what happened at 5 PM in the afternoon on Monday, 27 May 2007.`;

function App() {
  const [value, setValue] = React.useState(example_text);
  return (
    <Container>
      <ResponsiveAppBar />
      <Grid container spacing={2} paddingTop={4}>
        <Grid item lg={7} sm={12}>
          <LtTextArea value={value} setValue={setValue} />
        </Grid>
        <Grid item lg={5} sm={12}>
          <Paper elevation={3}>
            <BasicList value={value} setValue={setValue} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
