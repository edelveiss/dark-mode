import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useSearchForm } from "./hooks/useSearchForm";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [text, handleChanges] = useSearchForm("search", "");
  console.log("text1", text);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar text={text} handleChanges={handleChanges} />
      <Charts coinData={coinData} text={text} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// useEffect(() => {
//   axios
//     .get(
//       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
//     )
//     .then((res) => setCoinData(res.data))
//     .catch((err) => console.log(err));
// }, []);
// return (
//   <div className="App">
//     <Navbar text={text} handleChanges={handleChanges} />
//     <Charts coinData={coinData} />
//   </div>
// );
