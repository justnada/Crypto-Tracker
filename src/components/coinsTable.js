import React, { useState, useEffect, useContext } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { Crypto } from "../CryptoContext";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currency } = useContext(Crypto);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  console.log(coins);

  return (
    <div>
      {coins.map((coin) => {
        return <p>{coin.id}</p>;
      })}
    </div>
  );
};

export default CoinsTable;
