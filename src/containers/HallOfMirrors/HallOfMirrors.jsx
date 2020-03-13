import React from "react";
import styles from "./HallOfMirrors.module.scss";
import Face from "../../components/Face";
import people from "../../data/people"

const HallOfMirrors = () => {
 
  return (
    <>
      <section className={styles.mirror}>
        {people.map( person => <Face name={person.name} face={person.faceImg} leftEye={person.leftEyeImg} rightEye={person.rightEyeImg}/>)}
      </section>
    </>
  );
};

export default HallOfMirrors;
