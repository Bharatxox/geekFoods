import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LandingScreen from "../src/screen/LandingScreen.jsx";
import Resturants from "./screen/Resturants.jsx";
import Quote from "./screen/Quote.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LandingScreen/> */}
    <Resturants />
    {/* <Quote /> */}
  </React.StrictMode>
);
