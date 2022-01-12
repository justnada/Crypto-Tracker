import React, { createContext } from "react";

const crypto = createContext();

const CryptoContext = ({ children }) => {
  return <crypto.Provider>{children}</crypto.Provider>;
};

export default CryptoContext;
