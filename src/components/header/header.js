import React, { useContext } from "react";
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
import { Crypto } from "../../CryptoContext";

const Header = () => {
  const { currency, setCurrency } = useContext(Crypto);
  const navigate = useNavigate();

  const useStyle = makeStyles(() => ({
    title: {
      flex: 1,
      color: "#fff",
      fontFamily: "Inter !important",
      fontWeight: "700 !important",
      cursor: "pointer",
    },
  }));

  const styles = useStyle();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar sx={{ pt: 2, pb: 2 }}>
              <Typography
                onClick={() => navigate("/")}
                variant="h5"
                component="div"
                className={styles.title}
              >
                Crypto<span style={{ color: "#7668e9" }}>Tracker</span>
              </Typography>
              <FormControl sx={{ m: 1 }}>
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  variant="outlined"
                  inputProps={{ "aria-label": "without-label" }}
                  style={{
                    width: 100,
                    padding: 0,
                  }}
                >
                  <MenuItem value={"usd"}>USD</MenuItem>
                  <MenuItem value={"idr"}>IDR</MenuItem>
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
