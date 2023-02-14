import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
const example_text = `LanguageTool is your intelligent writing assistant for all common browsers and word processors. Write or paste your text here too have it checked continuously. Errors will be underlined in different colours: we will mark seplling errors with red underilnes. Furthermore grammar error's are highlighted in yellow. LanguageTool also marks style issues in a reliable manner by underlining them in blue. did you know that you can sea synonyms by double clicking a word? Its a impressively versatile tool especially if youd like to tell a colleague from over sea's about what happened at 5 PM in the afternoon on Monday, 27 May 2007.`;

function LtTextArea() {
  const [value, setValue] = useState(example_text);
  return (
    <div>
      <TextField
        label="Text to check"
        multiline
        rows={10}
        fullWidth
        value={value}
        inputProps={{
          style: {
            fontSize: 20,
            fontWeight: 400,
            //space between lines
            lineHeight: 1.7,
          },
        }}
      />
    </div>
  );
}

export default LtTextArea;
