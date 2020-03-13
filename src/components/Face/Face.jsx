import React, { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes/Eyes";

const Face = props => {
  const { name, face, leftEye, rightEye } = props;
  const [currentState, updateState] = useState(false);
  const animateEyes = currentState;
 
  return (
    <>
      <section className={styles.faceContainer} onClick={() => updateState(!currentState)}>
        <img src={face} alt="" className={styles.face}/>
        <div className={`${styles.eyeContainer} ${styles[name]}`}>
          <Eyes isLeft={true} leftEye={leftEye} moveEyes={animateEyes}/>
          <Eyes isLeft={false} rightEye={rightEye} moveEyes={animateEyes}/>
        </div>
      </section>
    </>
  );
};

export default Face;
