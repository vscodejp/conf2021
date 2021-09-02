import { FC } from "react";
import styles from "../static/Section.module.scss";

const Speakers: FC = () => {
  return (
    <section id={"speakers"} className={styles.section}>
      <h2>{"Speakers"}</h2>
      <h3>{"Coming soon"}</h3>
    </section>
  );
};

export default Speakers;
