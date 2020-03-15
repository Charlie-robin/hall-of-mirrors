import React, { useState } from "react";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  const [modalIsVisible, hideModal] = useState(true);
  const insertModal = modalIsVisible ? (
    <section className={styles.landingPage} onClick={() => hideModal(false)}>
      <h1>Hall of Mirrors</h1>
      <div className={styles.content}>
        <p>Hover and see who waits for thee....</p>
        <p>Click and Behold somethings rolled....</p>
      </div>
    </section>
  ) : (
    ""
  );
  return <>{insertModal}</>;
};

export default LandingPage;
