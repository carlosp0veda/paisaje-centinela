import React, { useEffect } from "react";
import styles from "./Backdrop.module.css";

function Backdrop(props) {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    }
    return function cleanup() {
      document.body.style.overflow = "visible";
    };
  }, [props.show]);

  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
}

export default Backdrop;
