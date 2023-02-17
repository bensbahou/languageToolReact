import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ErrorListItem from "./ErrorListItem";

function BasicList({ value, setValue, data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const matches = data.matches;
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        maxHeight: 370,
        overflow: "auto",
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      className="error-list"
    >
      <nav aria-label="main mailbox folders">
        {/* create a list of errors with max shown errors 5 */}
        <List>
          {matches.slice(0, 10).map((match, index) => (
            <ListItem disablePadding key={index}>
              <ErrorListItem
                match={match}
                index={index}
                expanded={expanded}
                handleChange={handleChange}
                value={value}
                setValue={setValue}
              />
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}

export default BasicList;
