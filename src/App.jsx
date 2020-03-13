import React from 'react';
import logo from './logo.svg';
import './App.css';
import HallOfMirrors from "./containers/HallOfMirrors";
import face from "./assets/imgs/shea.png";
import leftEye from "./assets/imgs/left.png";
import rightEye from "./assets/imgs/right.png"


function App() {
  return (
   <HallOfMirrors face={face} leftEye={leftEye} rightEye={rightEye} />
  );
}

export default App;
