import React, { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes/Eyes";

const Face = props => {
  const { face, leftEye, rightEye } = props;
  const [currentState, updateState] = useState(false);
  const animateEyes = currentState;
 
  return (
    <>
      <section className={styles.faceContainer} onClick={() => updateState(!currentState)}>
        <img src={face} alt="" className={styles.face}/>
        <div className={styles.eyeContainer}>
          <Eyes isLeft={true} leftEye={leftEye} moveEye={animateEyes}/>
          <Eyes isLeft={false} rightEye={rightEye} moveEye={animateEyes}/>
        </div>
      </section>
    </>
  );
};

export default Face;
