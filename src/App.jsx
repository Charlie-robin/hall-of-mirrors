import React, { useState, useEffect } from "react";

import "./App.css";
import HallOfMirrors from "./containers/HallOfMirrors";
import LandingPage from "./containers/LandingPage";

function App() {
  const [modalIsVisible, hideModal] = useState(true);
  const [mirrorCount , mirrorRandomer ] = useState(0);

  useEffect(() => {
    fetchRandomNum();
  }, []);

  const fetchRandomNum = () => {
    fetch('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new')
  .then(result => result.json())
  .then(result => mirrorRandomer(result))
  .catch(error => {
      console.log(error)
  })
  };
  
  const insertModal = modalIsVisible ? <LandingPage isVisible={modalIsVisible} handleClick={() => hideModal(!modalIsVisible)}/> : "";
  
  return (
    <>
      {insertModal}
      <HallOfMirrors numMirrors={mirrorCount} handleClick={() => hideModal(!modalIsVisible)}/>
    </>
  );
}

export default App;
