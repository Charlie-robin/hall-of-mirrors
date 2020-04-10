import React from "react";
import styles from "./HallOfMirrors.module.scss";
import Face from "../../components/Face";
import people from "../../data/people";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const HallOfMirrors = (props) => {
  const { handleClick, numMirrors } = props;

  const checkMirrorNum = (number) =>
    number === 1 ? "oneMirror" : number === 2 ? "twoMirror" : "";

  const mirrorDisplay = numMirrors ? checkMirrorNum(numMirrors) : "";

  return (
    <>
      <section className={`${styles.mirror} ${styles[mirrorDisplay]}`}>
        <FontAwesomeIcon
          icon={faInfoCircle}
          className={styles.info}
          onClick={(event) => handleClick(event.target.value)}
        />
        <div className={styles.numInfo}>
          <p>The random number API has given you {numMirrors} to view.</p>
          <p>{numMirrors}</p>
        </div>
        {people.slice(0, numMirrors).map((person) => (
          <Face
            name={person.name}
            face={person.faceImg}
            leftEye={person.leftEyeImg}
            rightEye={person.rightEyeImg}
          />
        ))}
      </section>
    </>
  );
};

export default HallOfMirrors;
