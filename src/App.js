import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Header from "./components/header/header";
import Home from "./pages/home";
import Coin from "./pages/coin";
import "./App.css";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#000918",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
