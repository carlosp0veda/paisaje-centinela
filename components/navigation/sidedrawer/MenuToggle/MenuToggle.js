import React from "react";
import styles from "./MenuToggle.module.css";

const menuToggle = (props) => (
  <button type="button" className={styles.MenuToggle} onClick={props.clicked} aria-label="Abrir menú" aria-expanded={!!props.open}>
    <span></span>
    <span></span>
    <span></span>
  </button>
);

export default menuToggle;
