import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HallOfMirrors from "./containers/HallOfMirrors";
import LandingPage from "./containers/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
      <HallOfMirrors />
    </>
  );
}

export default App;
