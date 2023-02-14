import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AbcIcon from "@mui/icons-material/Abc";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AbcIcon fontSize="large" />
          <Typography
            variant="h5"
            href=""
            sx={{
              display: { xs: "flex" },
              fontWeight: 700,
            }}
          >
            Language Tool
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
