import React from "react";
import styles from "./Eyes.module.scss";

const Eyes = props => {
  const { leftEye, rightEye, isLeft, moveEyes } = props;
  const eyeOrientation = isLeft ? leftEye : rightEye;
  const eyeStyles = isLeft ? styles.leftEye : styles.rightEye;
  const insertJsx = moveEyes ? (
    <img
      className={`${styles.eye} ${eyeStyles} ${styles.animate}`}
      src={eyeOrientation}
      alt="Shea's eyes"
    />
  ) : (
    <img
      className={`${styles.eye} ${eyeStyles}`}
      src={eyeOrientation}
      alt="Shea's eyes"
    />
  );

  return <>{insertJsx}</>;
};

export default Eyes;
