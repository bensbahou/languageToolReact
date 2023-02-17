import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ListItemText from "@mui/material/ListItemText";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
/*
let match_example = {
  message: "Did you mean “to have”?",
  shortMessage: "Possible typo",
  replacements: [
    {
      value: "to have",
    },
  ],
  offset: 126,
  length: 8,
  type: {
    typeName: "Other",
  },
  rule: {
    id: "TOO_TO",
    subId: "1",
    description: "too go (to go)",
    issueType: "misspelling",
    urls: [
      {
        value: "https://languagetool.org/insights/post/word-choice-to-too-two/",
      },
    ],
    category: {
      id: "CONFUSED_WORDS",
      name: "Commonly Confused Words",
    },
    isPremium: false,
  },
  ignoreForIncompleteSentence: true,
  contextForSureMatch: 5,
};
*/
function ErrorListItem({
  match,
  index,
  expanded,
  handleChange,

  value,
  setValue,
}) {
  let color = "primary";
  let error = match.error;
  const [show, setShow] = React.useState(true);

  switch (match.shortMessage) {
    case "Possible typo":
    case "Punctuation error":
      color = "#c69b04";
      break;
    case "Spelling mistake":
      color = "#ef2850";
      break;

    case "Redundant phrase":
    case "":
      color = "#5c4cff";
      break;
    default:
      color = "#c69b04";
      break;
  }

  return (
    show && (
      <Accordion
        sx={{ width: "100%", margin: 0.5 }}
        expanded={expanded === "panel" + index}
        onChange={handleChange("panel" + index)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel" + index + "bh-content"}
          id={"panel" + index + "bh-header"}
        >
          <ListItemButton>
            <ListItemIcon>
              <FiberManualRecordIcon sx={{ color: color }} />
            </ListItemIcon>
            <ListItemText
              primary={
                match.replacements[0].value +
                " - " +
                (match.shortMessage || "Style suggestion")
              }
            />
          </ListItemButton>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{match.message}</Typography>
          {match.replacements.map((correctvalue, index) => {
            return (
              <Button
                key={index}
                sx={{ margin: 1 }}
                variant="contained"
                color="primary"
                onClick={() => {
                  setShow(false);
                  console.log(
                    "|" + correctvalue.value + "|",
                    "|" + error + "|"
                  );
                  let corrected_text = value.replace(error, correctvalue.value);
                  console.log(corrected_text.length, value.length);
                  setValue(corrected_text);
                }}
              >
                {correctvalue.value} + {error}
              </Button>
            );
          })}
        </AccordionDetails>
      </Accordion>
    )
  );
}

export default ErrorListItem;
