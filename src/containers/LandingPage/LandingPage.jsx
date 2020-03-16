import React, { useState } from "react";
import styles from "./LandingPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const LandingPage = props => {
  const {isVisible, handleClick} = props
  const insertModal = isVisible ? (
    <section className={styles.landingPage} onClick={event => handleClick(event.target.value)}>
      <FontAwesomeIcon icon={faTimesCircle} className={styles.cross}/>
      <h1>Hall of Mirrors</h1>
      <div className={styles.content}>
        <p>Hover and See who waits for Thee....</p>
        <p>Click and Behold somethings Rolled....</p>
      </div>
    </section>
  ) : (
    ""
  );
  return <>{insertModal}</>;
};

export default LandingPage;
