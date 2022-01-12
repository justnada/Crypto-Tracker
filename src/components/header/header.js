import React from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#4f55ff",
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    cursor: "pointer",
  },
}));

const Header = () => {
  const styles = useStyle();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color="transparent"
          position="static"
          sx={{ backdropFilter: "blur(50px)" }}
        >
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                variant="h5"
                component="div"
                className={styles.title}
              >
                Crypto Tracker
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                  defaultValue={"USD"}
                  variant="outlined"
                  inputProps={{ "aria-label": "without-label" }}
                  style={{
                    width: 100,
                    marginRight: 15,
                    padding: 0,
                  }}
                >
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"ID"}>ID</MenuItem>
                </Select>
              </FormControl>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
