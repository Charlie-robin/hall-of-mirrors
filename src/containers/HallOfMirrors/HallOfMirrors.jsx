import React from "react";
import styles from "./HallOfMirrors.module.scss";
import Face from "../../components/Face"

const HallOfMirrors = props => {
  const {face, leftEye, rightEye} = props;
  return (
    <>
      <section className={styles.mirror}>
        <Face face={face} leftEye={leftEye} rightEye={rightEye} />
      </section>
    </>
  );
};

export default HallOfMirrors;
