import React from "react";
import styles from "./hamburgerIcon.module.css";

const HamburgerIcon = () => {
  return (
    <div className={`${styles["ham-icon"]} w-6`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerIcon;
