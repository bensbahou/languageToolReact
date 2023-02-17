import React from "react";
import { Container } from "@mui/material";
import { Grid, Paper, Button } from "@mui/material";
import BasicList from "./components/BasicList";
import LtTextArea from "./components/LtTextArea";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import InitialOptions from "./components/InitialOptions";

const example_text = `LanguageTool is your intelligent writing assistant for all common browsers and word processors. Write or paste your text here too have it checked continuously. Errors will be underlined in different colours: we will mark seplling errors with red underilnes. Furthermore grammar error's are highlighted in yellow. LanguageTool`;
let data_example = {
  language: {
    name: "English (GB)",
    code: "en-GB",
    detectedLanguage: {
      name: "English (GB)",
      code: "en-GB",
      confidence: 0.99,
      source: "fasttext",
    },
  },
  matches: [
    {
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
            value:
              "https://languagetool.org/insights/post/word-choice-to-too-two/",
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
    },
    {
      message: "Possible spelling mistake found.",
      shortMessage: "Spelling mistake",
      replacements: [
        {
          value: "selling",
        },
        {
          value: "spelling",
        },
        {
          value: "Selling",
        },
      ],
      offset: 221,
      length: 8,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "MORFOLOGIK_RULE_EN_GB",
        description: "Possible spelling mistake",
        issueType: "misspelling",
        category: {
          id: "TYPOS",
          name: "Possible Typo",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message: "Possible spelling mistake found.",
      shortMessage: "Spelling mistake",
      replacements: [
        {
          value: "underlines",
        },
      ],
      offset: 246,
      length: 10,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "MORFOLOGIK_RULE_EN_GB",
        description: "Possible spelling mistake",
        issueType: "misspelling",
        category: {
          id: "TYPOS",
          name: "Possible Typo",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message:
        "A comma may be missing after the conjunctive/linking adverb ‘Furthermore’.",
      shortMessage: "Punctuation error",
      replacements: [
        {
          value: "Furthermore,",
        },
      ],
      offset: 258,
      length: 11,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "SENT_START_CONJUNCTIVE_LINKING_ADVERB_COMMA",
        subId: "1",
        description:
          "Commas after conjunctive/linking adverbs in front of a new sentence.",
        issueType: "typographical",
        urls: [
          {
            value: "https://languagetool.org/insights/post/linking-words/",
          },
        ],
        category: {
          id: "PUNCTUATION",
          name: "Punctuation",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: true,
      contextForSureMatch: 10,
    },
    {
      message:
        "Did you mean the plural noun “errors” instead of the possessive?",
      shortMessage: "Extraneous apostrophe",
      replacements: [
        {
          value: "errors",
        },
      ],
      offset: 278,
      length: 7,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "APOS_ARE",
        subId: "1",
        description: "extraneous apostrophes before 'are'",
        issueType: "typographical",
        category: {
          id: "PUNCTUATION",
          name: "Punctuation",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 1,
    },
    {
      message:
        "Consider replacing this phrase with the adverb “reliably” to avoid wordiness.",
      shortMessage: "",
      replacements: [
        {
          value: "reliably",
        },
      ],
      offset: 350,
      length: 20,
      type: {
        typeName: "Hint",
      },
      rule: {
        id: "IN_A_X_MANNER",
        subId: "4",
        description: "Wordiness: in a ... manner",
        issueType: "style",
        category: {
          id: "REDUNDANCY",
          name: "Redundant Phrases",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: true,
      contextForSureMatch: 6,
    },
    {
      message: "‘sea’ (ocean) seems less likely than ‘see’ (to look at).",
      shortMessage: "Possible word confusion",
      replacements: [
        {
          value: "see",
          shortDescription: "to look at",
        },
      ],
      offset: 426,
      length: 3,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "CONFUSION_RULE_SEA_SEE",
        description:
          'Detects potentially wrong usage of "sea" instead of "see"',
        issueType: "non-conformance",
        category: {
          id: "TYPOS",
          name: "Possible Typo",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 3,
    },
    {
      message: "The verb “double-clicking” is spelled with a hyphen.",
      shortMessage: "",
      replacements: [
        {
          value: "double-clicking",
        },
      ],
      offset: 442,
      length: 15,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "DOUBLE_HYPHEN",
        subId: "6",
        description: "missing hyphen in 'double check/click/cross/park'",
        issueType: "grammar",
        urls: [
          {
            value:
              "https://languagetool.org/insights/post/hyphen/#hyphenating-verbs-modifies-their-meaning",
          },
        ],
        category: {
          id: "GRAMMAR",
          name: "Grammar",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 2,
    },
    {
      message: "“its” (belonging to it) seems less likely than “it’s” (it is)",
      shortMessage: "“its” not likely",
      replacements: [
        {
          value: "It's",
        },
        {
          value: "It is",
        },
      ],
      offset: 466,
      length: 3,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "AI_HYDRA_LEO_CPT_ITS_ITIS",
        description: 'Detects potentially wrong usage of "its"',
        issueType: "uncategorized",
        category: {
          id: "MISC",
          name: "Miscellaneous",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message:
        "Use “an” instead of ‘a’ if the following word starts with a vowel sound, e.g. ‘an article’, ‘an hour’.",
      shortMessage: "Wrong article",
      replacements: [
        {
          value: "an",
        },
      ],
      offset: 470,
      length: 1,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "EN_A_VS_AN",
        description: "Use of 'a' vs. 'an'",
        issueType: "misspelling",
        urls: [
          {
            value:
              "https://languagetool.org/insights/post/indefinite-articles/",
          },
        ],
        category: {
          id: "MISC",
          name: "Miscellaneous",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 1,
    },
    {
      message: "Possible missing comma found.",
      shortMessage: "Missing comma",
      replacements: [
        {
          value: "tool,",
        },
      ],
      offset: 495,
      length: 4,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "AI_HYDRA_LEO_MISSING_COMMA",
        description:
          "This rule identifies whether commas are missing in a sentence.",
        issueType: "uncategorized",
        category: {
          id: "MISC",
          name: "Miscellaneous",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message: "Possible spelling mistake found.",
      shortMessage: "Spelling mistake",
      replacements: [
        {
          value: "you'd",
        },
      ],
      offset: 514,
      length: 4,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "EN_CONTRACTION_SPELLING",
        description: "Spelling of English contractions",
        issueType: "misspelling",
        category: {
          id: "TYPOS",
          name: "Possible Typo",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message: "Did you mean “overseas”?",
      shortMessage: "",
      replacements: [
        {
          value: "overseas",
        },
      ],
      offset: 549,
      length: 10,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "OVER_SEAS",
        subId: "2",
        description: "over seas (overseas)",
        issueType: "misspelling",
        category: {
          id: "TYPOS",
          name: "Possible Typo",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message: "This is redundant. Consider using “PM”.",
      shortMessage: "Redundant phrase",
      replacements: [
        {
          value: "PM",
        },
      ],
      offset: 585,
      length: 19,
      type: {
        typeName: "Hint",
      },
      rule: {
        id: "PM_IN_THE_EVENING",
        subId: "1",
        description: "PM in the evening (PM)",
        issueType: "style",
        category: {
          id: "REDUNDANCY",
          name: "Redundant Phrases",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: false,
      contextForSureMatch: 0,
    },
    {
      message: "The date 27 May 2007 is not a Monday, but a Sunday.",
      shortMessage: "",
      replacements: [],
      offset: 608,
      length: 19,
      type: {
        typeName: "Other",
      },
      rule: {
        id: "DATE_WEEKDAY",
        subId: "1",
        description: "Weekday doesn't match date",
        issueType: "inconsistency",
        urls: [
          {
            value: "https://www.timeanddate.com/calendar/?year=2007",
          },
        ],
        category: {
          id: "SEMANTICS",
          name: "Semantics",
        },
        isPremium: false,
      },
      ignoreForIncompleteSentence: true,
      contextForSureMatch: 5,
    },
  ],
  sentenceRanges: [
    [0, 95],
    [96, 159],
    [160, 257],
    [258, 312],
    [313, 399],
    [400, 465],
    [466, 628],
  ],
};

const add_errors = (data, text) => {
  data.matches = data.matches.map((match) => {
    match.error = text.slice(match.offset, match.offset + match.length);
    return match;
  });
  data.text = text;
  return data;
};
data_example = add_errors(data_example, example_text);

function App() {
  const [value, setValue] = React.useState("");
  const [showErrors, setShowErrors] = React.useState(false);
  const [data, setData] = React.useState(data_example);
  return (
    <Container>
      <ResponsiveAppBar />
      <Grid container spacing={2} paddingTop={4}>
        <Grid item lg={7} sm={12}>
          <LtTextArea value={value} setValue={setValue} />
        </Grid>
        {showErrors && (
          <Grid item lg={5} sm={12}>
            <Paper elevation={3}>
              <BasicList value={value} setValue={setValue} data={data} />
            </Paper>
          </Grid>
        )}
        {!showErrors && (
          <InitialOptions
            setShowErrors={setShowErrors}
            value={value}
            setValue={setValue}
            example_text={example_text}
            setData={setData}
            data={data}
            add_errors={add_errors}
          />
        )}
      </Grid>
    </Container>
  );
}

export default App;
