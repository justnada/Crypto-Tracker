import React, { createContext, useState, useEffect } from "react";

export const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("idr");
  const [symbol, setSymbol] = useState("Rp.");

  useEffect(() => {
    if (currency === "idr") setSymbol("Rp.");
    else if (currency === "usd") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;
