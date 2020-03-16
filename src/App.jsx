import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HallOfMirrors from "./containers/HallOfMirrors";
import LandingPage from "./containers/LandingPage";

function App() {
  const [modalIsVisible, hideModal] = useState(true);
  const insertModal = modalIsVisible ? <LandingPage isVisible={modalIsVisible} handleClick={() => hideModal(!modalIsVisible)}/> : "";
  return (
    <>
      {insertModal}
      <HallOfMirrors handleClick={() => hideModal(!modalIsVisible)}/>
    </>
  );
}

export default App;
