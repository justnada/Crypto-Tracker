import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home";
import Coin from "./pages/coin";
import "./App.css";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
